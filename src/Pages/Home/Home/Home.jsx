import Banner from '../Banner/Banner';
import CallUsSection from '../CallUsSection/CallUsSection';
import Categories from '../Categories/Categories';
import Featured from '../Featured/Featured';
import InfoBanner from '../InfoBanner/InfoBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommends from '../Recommends/Recommends';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
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