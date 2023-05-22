import img1 from '../../../assets/gallery1.jpg'
import img2 from '../../../assets/gallery2.jpg'
import img3 from '../../../assets/gallery3.jpg'

const Gallery = () => {
    const images = [
        img1,
        img2,
        img3 ,
        // Add more image URLs here
      ];
    
    return (
        <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img src={image} alt={`Image ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    );
};

export default Gallery;