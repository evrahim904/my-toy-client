import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
const Banner = () => {
  return (
    <div className="carousel w-full h-[700px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full" />
        
        <div className="absolute h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className= ' absolute text-white space-y-6 w-1/3 pl-4 top-1/2'>
            <h2 className='text-5xl font-bold'>Get Your Toy Car Collection</h2>
            <p>

              Unleash speed and style with our toy car collection. Meticulously crafted miniatures, perfect for collectors and enthusiasts. Fuel your passion and ignite your imagination today!
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3 ">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>

      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full" />
        
        <div className="absolute h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className= ' absolute text-white space-y-6 w-1/3 pl-4 top-1/2'>
            <h2 className='text-5xl font-bold'>Get Your Toy Car Collection</h2>
            <p>

              Unleash speed and style with our toy car collection. Meticulously crafted miniatures, perfect for collectors and enthusiasts. Fuel your passion and ignite your imagination today!
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3 ">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full" />
       
        <div className="absolute h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className= ' absolute text-white space-y-6 w-1/3 pl-4 top-1/2'>
            <h2 className='text-5xl font-bold'>Get Your Toy Car Collection</h2>
            <p>

              Unleash speed and style with our toy car collection. Meticulously crafted miniatures, perfect for collectors and enthusiasts. Fuel your passion and ignite your imagination today!
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3 ">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full" />
       
        <div className="absolute h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className= ' absolute text-white space-y-6 w-1/3 pl-4 top-1/2'>
            <h2 className='text-5xl font-bold'>Get Your Toy Car Collection</h2>
            <p>

              Unleash speed and style with our toy car collection. Meticulously crafted miniatures, perfect for collectors and enthusiasts. Fuel your passion and ignite your imagination today!
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3 ">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;