import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";

const Dashboard = () => {
    const [cart] = useAddToCart();

    return (
        <div className="flex">

            {/* side bar  */}
            <div className="w-72 min-h-screen bg-[#D1A054]">
                <ul className="menu space-y-3">
                    <li><NavLink to="/">
                        <FaCartShopping />
                        USER HOME
                    </NavLink></li>
                    <li><NavLink to="/dashboard/reservation">
                        <FaCartShopping />
                        RESERVATION
                    </NavLink></li>
                    <li><NavLink to="/dashboard/payment-history">
                        <FaCartShopping />
                        PAYMENT HISTORY
                    </NavLink></li>
                    <li><NavLink to="/dashboard/cart">
                        <FaCartShopping />
                        MY CART ({cart.length})
                    </NavLink></li>
                    <li><NavLink to="/dashboard/review">
                        <FaCartShopping />
                        ADD REVIEW
                    </NavLink></li>
                    <li><NavLink to="/dashboard/booking">
                        <FaCartShopping />
                        MY BOOKING
                    </NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/">
                        <FaCartShopping />
                        HOME
                    </NavLink></li>
                    <li><NavLink to="/order/salad">
                        <FaCartShopping />
                        MENU
                    </NavLink></li>
                    <li><NavLink to="/order/salad">
                        <FaCartShopping />
                        SHOP
                    </NavLink></li>
                    <li><NavLink to="/contact">
                        <FaCartShopping />
                        CONTACT
                    </NavLink></li>
                </ul>
            </div>

            {/* dashboard content  */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;