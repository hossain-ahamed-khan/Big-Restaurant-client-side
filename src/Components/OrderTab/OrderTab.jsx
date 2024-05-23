import FoodItemCard from "../FoodItemCard/FoodItemCard";

const OrderTab = ({ items }) => {
    return (
        <div className="w-4/5 mx-auto my-20 grid grid-cols-3 gap-10">
            {
                items.map(item => <FoodItemCard
                    key={item._id}
                    item={item}
                ></FoodItemCard>)
            }
        </div>
    );
};

export default OrderTab;