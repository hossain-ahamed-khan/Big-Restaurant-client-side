import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from "react-icons/fa";

import '@smastrom/react-rating/style.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-umber-two.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    return (
        <section className="w-4/5 mx-auto text-center my-24">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="w-4/5 mx-auto flex flex-col items-center">
                            <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
                            <p className="text-5xl my-8"><FaQuoteLeft /></p>
                            <p>{review.details}</p>
                            <p className="text-[#CD9003] text-3xl font-medium mt-2">{review.name}</p>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>


        </section>
    );
};

export default Testimonials;