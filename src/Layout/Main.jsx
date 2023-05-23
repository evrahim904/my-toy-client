
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='mt-auto'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;