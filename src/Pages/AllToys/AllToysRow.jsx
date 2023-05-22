import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToysRow = ({ allToy }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, price, sellerName, quantity, category, } = allToy;

    const handleDetails = () => {
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
        <>

            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">

                        <div>
                            <div className="font-bold">{sellerName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>

                    {
                        user ?
                            <Link to={`/details/${_id}`}>
                                <button className="btn btn-ghost btn-xs">View Details</button>
                            </Link> :
                            <Link to={`/details/${_id}`}>
                                <button onClick={handleDetails} className="btn btn-ghost btn-xs">View Details</button>
                            </Link>
                    }

                </td>
                <th>
                </th>
            </tr>
        </>
    );
};

export default AllToysRow;