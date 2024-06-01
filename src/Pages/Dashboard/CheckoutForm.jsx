import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAddToCart from "../../hooks/useAddToCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useAddToCart();
    const { user } = useAuth();
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorMessage(error.message);
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
            setErrorMessage("");
        }

        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email || "anonymous",
                    name: user?.displayName || "anonymous"
                }
            }
        });

        if (confirmError) {
            console.log('[confirmError]', confirmError);
        }
        else {
            console.log('[paymentIntent]', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending"
                }
                const res = await axiosSecure.post("/payments", payment)
                console.log("payment saved", res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Payment successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }
    }

    return (
        <div className="w-4/5 mx-auto p-10">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center mt-10">
                    <button type="submit" className="btn bg-[#570DF8] text-white font-bold text-xl w-72" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className="text-red-600">{errorMessage}</p>
                </div>
                <div className="text-green-600">
                    {
                        transactionId && <h3>Your transaction id: {transactionId}</h3>
                    }
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;