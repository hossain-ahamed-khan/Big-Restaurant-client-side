import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { _id, name, category, recipe, price } = useLoaderData();
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        // image upload to imagebb and get an url 
        const imageFile = { image: data.image[0] };

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now all the data with image will send to the database 
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div className="w-4/5 mx-auto">
            <SectionTitle
                heading={"UPDATE ITEM"}
            ></SectionTitle>
            <div className=" bg-[#F6F6F6] min-h-screen p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                    </label>

                    <div className="flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select className="select select-bordered w-full" defaultValue={category} {...register("category", { required: true })}>
                                <option disabled>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soups</option>
                                <option value="dessert">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered w-full h-52" placeholder="Recipe Details"></textarea>
                    </label>

                    <div className="form-control w-full my-4">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button type="submit" className="btn bg-[#9B6E29] text-white" >
                        Update Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;