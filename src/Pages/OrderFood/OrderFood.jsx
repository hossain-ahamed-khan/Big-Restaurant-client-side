import ourShopCover from "../../assets/shop/banner2.jpg";
import Cover from "../../Components/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import { useState } from "react";
import OrderTab from "../../Components/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OrderFood = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    const { category } = useParams();
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);

    return (
        <div>
            <Helmet>
                <title>Order Food | Big Boss Restaurant</title>
            </Helmet>
            <Cover
                image={ourShopCover}
                heading={"OUR SHOP"}
                subHeading={"Would you like to try a dish?"}
            ></Cover>

            <Tabs className="text-center" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>

                </TabPanel>
            </Tabs>

        </div>
    );
};

export default OrderFood;