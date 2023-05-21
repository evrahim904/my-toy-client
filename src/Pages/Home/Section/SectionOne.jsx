import section1 from '../../../assets/section1.jpg'
import section2 from '../../../assets/section2.jpg'
import section3 from '../../../assets/section3.jpg'
const SectionOne = () => {
    return (
        <div className="carousel rounded-box">
        <div className="carousel-item">
          <img src={section1} alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src={section2} alt="Burger" />
        </div>  
        <div className="carousel-item">
          <img src={section3} alt="Burger" />
        </div>  
        <div className="carousel-item">
          <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
        </div>
      </div>
    );
};

export default SectionOne;