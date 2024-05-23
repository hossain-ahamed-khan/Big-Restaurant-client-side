import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/our-menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/order-food/:category',
                element: <OrderFood></OrderFood>
            },
        ]
    },
]);