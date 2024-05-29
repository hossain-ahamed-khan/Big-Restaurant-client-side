import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import { TiHome } from "react-icons/ti";
import { ImSpoonKnife } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { MdOutlineRateReview } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useAddToCart();

    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    return (
        <div className="flex">
            {/* side bar  */}
            <div className="w-72 min-h-screen bg-[#D1A054] p-10">
                <ul className="menu space-y-3">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/admin-home">
                                    <TiHome />
                                    ADMIN HOME
                                </NavLink></li>
                                <li><NavLink to="/dashboard/add-items">
                                    <ImSpoonKnife />
                                    ADD ITEMS
                                </NavLink></li>
                                <li><NavLink to="/dashboard/manage-items">
                                    <FaOutdent />
                                    MANAGE ITEMS
                                </NavLink></li>
                                <li><NavLink to="/dashboard/manage-bookings">
                                    <FaBook />
                                    MANAGE BOOKINGS
                                </NavLink></li>
                                <li><NavLink to="/dashboard/all-users">
                                    <FaUsers />
                                    ALL USERS
                                </NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/">
                                    <TiHome />
                                    USER HOME
                                </NavLink></li>
                                <li><NavLink to="/dashboard/reservation">
                                    <FaCalendarDays />
                                    RESERVATION
                                </NavLink></li>
                                <li><NavLink to="/dashboard/payment-history">
                                    <GiWallet />
                                    PAYMENT HISTORY
                                </NavLink></li>
                                <li><NavLink to="/dashboard/cart">
                                    <FaCartShopping />
                                    MY CART ({cart.length})
                                </NavLink></li>
                                <li><NavLink to="/dashboard/review">
                                    <MdOutlineRateReview />
                                    ADD REVIEW
                                </NavLink></li>
                                <li><NavLink to="/dashboard/booking">
                                    <FaCalendarCheck />
                                    MY BOOKING
                                </NavLink></li>
                            </>
                    }
                    <div className="divider"></div>

                    <li><NavLink to="/">
                        <TiHome />
                        HOME
                    </NavLink></li>
                    <li><NavLink to="/order/salad">
                        <IoMenu />
                        MENU
                    </NavLink></li>
                    <li><NavLink to="/order/salad">
                        <AiFillShopping />
                        SHOP
                    </NavLink></li>
                    <li><NavLink to="/contact">
                        <FaEnvelope />
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