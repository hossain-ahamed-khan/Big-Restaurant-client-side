import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useAddToCart from "../../hooks/useAddToCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useAddToCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/contact-us">CONTACT US</NavLink></li>
        <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
        <li><NavLink to="/our-menu">OUR MENU</NavLink></li>
        <li><NavLink to="/order-food/salad">ORDER FOOD</NavLink></li>
        <li><NavLink to="/secret">Secret</NavLink></li>
        {
            user &&
            <li className="ml-4">
                <NavLink to="/dashboard/cart">
                    <FaCartPlus />
                    <div className="badge badge-secondary ml-1">+{cart.length}</div>
                </NavLink>
            </li>
        }
    </>
    return (
        <div className="navbar fixed z-10 text-slate-100 bg-slate-800 opacity-75">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Boss Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <> <span>{user?.displayName}</span>
                        <div className="w-10 h-10 mx-2"><img src={user?.photoURL} alt="img" /></div>
                        <button onClick={handleLogOut} className="btn">Log out</button>
                    </> :
                        <Link to="/login" className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;