import { useForm } from "react-hook-form"
import loginImg from "../../assets/others/authentication1.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // send user info to the database 
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }
                        axiosPublic.post("/user", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "center",
                                        title: "User created successfully",
                                        icon: "success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Sign Up | Big Boss Restaurant</title>
            </Helmet>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left max-w-3xl">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-lg">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" className="input input-bordered" {...register("photoURL", { required: true })} />
                                {errors.photoURL && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                                })} />
                                {errors.email?.type === "required" && <span className="text-red-600">This field is required</span>}
                                {errors.email?.type === "pattern" && <span className="text-red-600">Enter a correct email format</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
                                })} />
                                {errors.password?.type === "required" && <span className="text-red-600">password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">password must be 6 characters</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600">password must be less then 20 characters</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">password should contain at least one uppercase, one lowercase, one digits and one special characters.</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-[#D1A054]" value="Sign Up" />
                            </div>
                        </form>
                        <div className="text-center">
                            <p><small>Already have an account? <Link className="text-[#D1A054]" to="/login">Go to log in</Link></small></p>
                            <p><small>or, Sign up with</small></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;