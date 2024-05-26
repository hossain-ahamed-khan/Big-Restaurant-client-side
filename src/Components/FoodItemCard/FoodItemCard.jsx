import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAddToCart from "../../hooks/useAddToCart";

const FoodItemCard = ({ item }) => {
    const { _id, name, recipe, image, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useAddToCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to the database 
            const cartItem = {
                menuId: _id, email: user.email, name, image, price
            }

            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Item added to Cart",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page 
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="card max-w-md rounded-none bg-[#F3F3F3]">
            <figure><img className="w-full" src={image} alt="food_img" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-3">
                    <button
                        onClick={handleAddToCart}
                        className="btn bg-[#E8E8E8] text-[#BB8506] uppercase border-b-2 border-b-[#BB8506] hover:bg-[#1F2937]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItemCard;