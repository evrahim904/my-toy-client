import { useLoaderData } from "react-router-dom";



const ViewDetails = () => {
    const detail = useLoaderData()
    const { name, photo, price,email, sellerName, Rating, quantity, details } = detail;

   
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Toy Name: {name}</h2>
          <h2 className="card-title">Seller Name: {sellerName}</h2>
          <p>Seller Email: {email}</p>
          <p>Price: {price}</p>
          <p>Rating: {Rating}
          <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
          </p>
          <p>Available Quantity: {quantity}</p>
          <p>Description: {details}</p>
          
        </div>
      </div>
    );
};

export default ViewDetails;