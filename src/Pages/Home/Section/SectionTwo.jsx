
import { FaTruck, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import img from '../../../assets/image.jpg'

const SectionTwo = () => {
    
    return (
        <section className="delivery-section text-primary mt-3 mb-6">
     <h2 className="text-3xl text-center">Our delivery services</h2>
      <div className="container mt-3 bg-slate-200 h-44 items-center text-primary">
        <div className="grid md:grid-cols-3">
          <div className="grid-item mt-12 ms-12">
            <FaTruck className="icon" />
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered quickly and efficiently.</p>
          </div>
          <div className="grid-item mt-12 ms-12">
            <FaClock className="icon" />
            <h3>24/7 Service</h3>
            <p>Enjoy round-the-clock customer support.</p>
          </div>
          <div className="grid-item mt-12 ms-12">
            <FaMapMarkerAlt className="icon" />
            <h3>Global Delivery</h3>
            <p>We ship to locations worldwide.</p>
          </div>
        </div>
      </div>
      <div className="background-image-container">
        <img 
          src={img}
          alt="Background"
          className="background-image w-full"
        />
      </div>
    </section>
    );
};

export default SectionTwo;