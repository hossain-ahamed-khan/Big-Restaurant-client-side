import { Link } from 'react-router-dom';
import MenuItem from '../../Components/MenuItem/MenuItem';

const MenuCategories = ({ items, title }) => {
    return (
        <section className='w-4/5 mx-auto mt-20'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    items.map(item => <MenuItem Item key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-20">
                <Link to={`/order-food/${title}`}>
                    <button className="btn text-center uppercase border-b-2 border-b-slate-800">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </section>
    );
};

export default MenuCategories;