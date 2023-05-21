import { Link } from "react-router-dom";

const TabCar = ({car}) => {
    const {_id,name,photo,price,Rating} = car;
    return (
    
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {Rating}</p>
          <div className="card-actions">
            <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default TabCar;