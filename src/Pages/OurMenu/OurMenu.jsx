import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";

import menuBannerImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import useMenu from "../../hooks/useMenu";
import MenuCategories from "../../Components/MenuCategories/MenuCategories";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');



    return (
        <div>
            <Helmet>
                <title>Our Menu | Big Boss Restaurant</title>
            </Helmet>

            <div>
                <Cover
                    image={menuBannerImg}
                    heading={"our menu"}
                    subHeading={"Would you like to try a dish?"}
                ></Cover>
                <SectionTitle
                    subHeading={"Don't miss"}
                    heading={"TODAY'S OFFER"}>
                </SectionTitle>
                <MenuCategories
                    items={offered}>
                </MenuCategories>
            </div>

            <div>
                <Cover
                    image={dessertImg}
                    heading={"desserts"}
                    subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
                <MenuCategories
                    items={dessert}
                    title={"desert"}
                >
                </MenuCategories>
            </div>

            <div>
                <Cover
                    image={pizzaImg}
                    heading={"pizza"}
                    subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
                <MenuCategories
                    items={pizza}
                    title={"pizza"}
                >
                </MenuCategories>
            </div>

            <div>
                <Cover
                    image={saladImg}
                    heading={"salads"}
                    subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
                <MenuCategories
                    items={salad}
                    title={"salad"}
                >
                </MenuCategories>
            </div>

            <div>
                <Cover
                    image={soupImg}
                    heading={"soups"}
                    subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
                <MenuCategories
                    items={soup}
                    title={"soup"}
                >
                </MenuCategories>
            </div>
        </div>
    );
};

export default OurMenu;