
import CategoryTab from '../CategoryTab';
import Banner from './Banner';
import Gallery from './Section/Gallery';
import HomePage from './Section/HomePage';
import SectionOne from './Section/SectionOne';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <SectionOne></SectionOne>
        </div>
    );
};

export default Home;
