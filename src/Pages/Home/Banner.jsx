import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">
  <div id="item1" className="carousel-item w-full rounded-lg">
    <img src={slider1}className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={slider2} className="w-full " />
  </div> 
  <div id="item3" className="carousel-item w-full ">
    <img src={slider3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={slider4}className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;