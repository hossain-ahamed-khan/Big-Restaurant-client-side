import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <section className="my-24 h-[860px] relative bg-fixed" style={{ backgroundImage: `url(${img})` }}>
            <div className="w-full h-[860px] bg-[#151515B3] absolute">
                <div className="w-4/5 mx-auto pt-20 text-white">
                    <SectionTitle
                        subHeading={"Check it out"}
                        heading={"FROM OUR MENU"}
                    ></SectionTitle>
                    <div className="flex gap-10 px-20 items-center">
                        <img className="max-w-lg" src={img} alt="" />
                        <div className="text-white">
                            <p>March 20, 2023</p>
                            <p>WHERE CAN I GET SOME?</p>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere dolores maiores<br /> quod nobis quas quasi. Eaque repellat laudantium tempore consequatu consequuntur omnis ullam maxime tenetur.consequuntur omnis ullam maxime tenetur</p>
                            <button className="btn btn-outline border-b-2 border-b-white uppercase text-white">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;