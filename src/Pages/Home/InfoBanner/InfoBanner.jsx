import bannerImg from '../../../assets/home/chef-service.jpg';

const InfoBanner = () => {
    return (
        <section className='relative w-4/5 mx-auto'>
            <img src={bannerImg} alt="" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 text-slate-900 text-center p-14 w-4/5 mx-auto'>
                <h1 className='text-3xl mb-3'>BISTRO BOSS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </section>
    );
};

export default InfoBanner;