import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAddToCart from "../../hooks/useAddToCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {

    const [cart, refetch] = useAddToCart();
    const totalPrice = cart.reduce((total, currentItem) => total + currentItem.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="w-4/5 mx-auto">
            <SectionTitle
                heading={"WANNA ADD MORE"}
                subHeading={"My Cart"}
            ></SectionTitle>
            <div className=" bg-[#F6F6F6] min-h-screen p-10">
                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold">Items: {cart.length}</h2>
                    <h2 className="text-4xl font-bold">Total Price: {totalPrice}</h2>
                    <button className="btn bg-[#D1A054] min-w-md">Pay</button>
                </div>

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#d1a054]">
                            <tr>
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="mask mask-squire w-20 h-20">
                                            <img src={item.image} />
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn bg-red-600 btn-xl hover:bg-red-500">
                                            <FaTrashAlt className="text-white"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;