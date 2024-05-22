import Banner from '../Banner/Banner';
import CallUsSection from '../CallUsSection/CallUsSection';
import Categories from '../Categories/Categories';
import Featured from '../Featured/Featured';
import InfoBanner from '../InfoBanner/InfoBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommends from '../Recommends/Recommends';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Big Boss Restaurant</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <InfoBanner></InfoBanner>
            <PopularMenu></PopularMenu>
            <CallUsSection></CallUsSection>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;