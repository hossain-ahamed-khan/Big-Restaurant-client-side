
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
            <section className='w-4/5 mx-auto mt-24 mb-36'>
                <SectionTitle
                    heading={"ORDER ONLINE"}
                    subHeading={"from 11:00am to 10:00pm"}
                >
                </SectionTitle>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-14"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h2 className='text-center font-bold text-3xl -mt-10 text-slate-100'>SALAD</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h2 className='text-center font-bold text-3xl -mt-10 text-slate-100'>PIZZA</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h2 className='text-center font-bold text-3xl -mt-10 text-slate-100'>SOUP</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h2 className='text-center font-bold text-3xl -mt-10 text-slate-100'>DESSERT</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h2 className='text-center font-bold text-3xl -mt-10 text-slate-100'>SALAD</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h2 className='text-center font-bold text-3xl -mt-10 text-slate-100'>SOUP</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h2 className='text-center font-bold text-3xl -mt-10 text-slate-100'>DESSERT</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h2 className='text-center font-bold text-3xl -mt-10 text-slate-100'>SALAD</h2>
                    </SwiperSlide>
                </Swiper>
            </section >
        </>
    );
};

export default Category;