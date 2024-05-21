import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FoodItemCard from "../../../Components/FoodItemCard/FoodItemCard";

const Recommends = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setFoodItems(data))
    }, [])


    return (
        <section className="w-4/5 mx-auto">
            <SectionTitle
                heading={"CHEF RECOMMENDS"}
                subHeading={"Should Try"}
            ></SectionTitle>

            <div className="grid grid-cols-3 gap-5">
                {
                    foodItems.slice(0, 3).map(item => <FoodItemCard key={item._id} item={item}></FoodItemCard>)
                }
            </div>

        </section>
    );
};

export default Recommends;