import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    const popularItems = menu.filter(item => item.category === 'popular')

    return (
        <section className="w-4/5 mx-auto mt-36 mb-24">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className="text-center mt-14">
                <button className="btn text-center uppercase border-b-2 border-b-slate-800">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;