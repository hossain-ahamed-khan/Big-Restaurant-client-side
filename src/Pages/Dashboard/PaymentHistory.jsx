import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div className="w-4/5 mx-auto">
            <SectionTitle
                heading={"PAYMENT HISTORY"}
            ></SectionTitle>
            <div className=" bg-[#F6F6F6] min-h-screen p-10">
                <h1>Total Payments: {payments.length}</h1>
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#d1a054]">
                            <tr>
                                <th>EMAIL</th>
                                <th>CATEGORY</th>
                                <th>TOTAL PRICE</th>
                                <th>PAYMENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map(item =>
                                    <tr key={item._id}>
                                        <td>{item.email}</td>
                                        <td>{item.transactionId}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.status}</td>

                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;