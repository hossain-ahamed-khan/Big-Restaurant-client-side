import ourShopCover from "../../assets/shop/banner2.jpg";
import Cover from "../../Components/Cover/Cover";

const OrderFood = () => {
    return (
        <div>
            <Cover
                image={ourShopCover}
                heading={"OUR SHOP"}
                subHeading={"Would you like to try a dish?"}
            ></Cover>
        </div>
    );
};

export default OrderFood;