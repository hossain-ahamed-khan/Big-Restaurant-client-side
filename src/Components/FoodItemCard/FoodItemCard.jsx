
const FoodItemCard = ({ item }) => {
    const { name, recipe, image } = item;

    return (
        <div className="card max-w-md rounded-none bg-[#F3F3F3]">
            <figure><img className="w-full" src={image} alt="food_img" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-3">
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] uppercase border-b-2 border-b-[#BB8506] hover:bg-[#1F2937]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItemCard;