
import CategoryTab from '../CategoryTab';
import Banner from './Banner';
import Gallery from './Section/Gallery';
import HomePage from './Section/HomePage';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>

            <HomePage></HomePage>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
        </div>
    );
};

export default Home;
