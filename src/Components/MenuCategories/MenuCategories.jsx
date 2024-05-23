import MenuItem from '../../Components/MenuItem/MenuItem';

const MenuCategories = ({ items }) => {
    return (
        <section className='w-4/5 mx-auto mt-20'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-20">
                <button className="btn text-center uppercase border-b-2 border-b-slate-800">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>
    );
};

export default MenuCategories;