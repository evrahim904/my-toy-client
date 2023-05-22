import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const TabCar = ({car}) => {
  const {user} = useContext(AuthContext)
    const {_id,name,photo,price,Rating} = car;

    
    const handleDetails = ()=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'warning',
        title: 'You have to log in first to view details'
      })
    }
    return (
    
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {Rating}
        <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
        
        </p>
          <div className="card-actions">
            {user?
            
            <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>:


             <Link to={`/details/${_id}`}><button  onClick={handleDetails} className="btn btn-primary">View Details</button></Link>
            }
          </div>
        </div>
      </div>
    );
};

export default TabCar;