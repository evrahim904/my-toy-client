
import useTitle from '../../Hooks/UseTitle';
import CategoryTab from '../CategoryTab';
import Banner from './Banner';
import Gallery from './Section/Gallery';
import SectionOne from './Section/SectionOne';
import SectionTwo from './Section/SectionTwo';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;
