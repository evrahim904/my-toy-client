import { Link } from "react-router-dom";

const AllToysRow = ({allToy}) => {
    const { _id, name, price, sellerName, quantity, category,} = allToy;
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
                <td> <Link to={`/details/${_id}`}>
                        <button className="btn btn-ghost btn-xs">View Details</button>
                    </Link></td>
                <th>
                </th>
            </tr>
        </>
    );
};

export default AllToysRow;