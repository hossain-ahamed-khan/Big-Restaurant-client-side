
const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;

    return (
        <div className="flex gap-6 text-[#737373]">
            <img className="w-20 h-20 rounded-full rounded-tl-none" src={image} alt="" />
            <div className="space-y-2">
                <h2 className="text-2xl">{name} -----------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;