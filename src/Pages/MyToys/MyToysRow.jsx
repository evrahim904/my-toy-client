import { Link } from "react-router-dom";

const MyToysRow = ({ toy, handleDelete }) => {

    const { _id, name, photo, price, sellerName, Rating, quantity, category,details } = toy;


    return (
        <>

            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {sellerName && sellerName}
                </td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{Rating}</td>
                <td>{quantity}</td>
                <td>{details}</td>
                <th>
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-ghost btn-xs">update</button>
                    </Link>
                </th>

                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square bg-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
            </tr>
        </>
    );
};

export default MyToysRow;