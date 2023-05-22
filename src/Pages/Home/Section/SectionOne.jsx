import section1 from '../../../assets/section1.jpg'
import section2 from '../../../assets/section2.jpg'
import section3 from '../../../assets/section3.jpg'
const SectionOne = () => {
    return (
        
      <div>
        <h2 className='text-center text-3xl  mt-6 text-indigo-600'>What do customers buy after viewing this item?</h2>
         <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={section1}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">joker doll</h2>
    <p> price: $200</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={section2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">smile toy</h2>
    <p> price: $500</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={section3}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">dragon toy</h2>
    <p> price: $300</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
       </div>
      </div>
    );
};

export default SectionOne;