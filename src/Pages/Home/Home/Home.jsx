import Banner from '../Banner/Banner';
import CallUsSection from '../CallUsSection/CallUsSection';
import Categories from '../Categories/Categories';
import InfoBanner from '../InfoBanner/InfoBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommends from '../Recommends/Recommends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <InfoBanner></InfoBanner>
            <PopularMenu></PopularMenu>
            <CallUsSection></CallUsSection>
            <Recommends></Recommends>
        </div>
    );
};

export default Home;