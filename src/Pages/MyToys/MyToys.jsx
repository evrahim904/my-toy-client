import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
    const [addToys, setAddToys] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/adding?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAddToys(data)
            })
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            background: 'AntiqueWhite',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/adding/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = addToys.filter(add => add._id !== id)
                        setAddToys(remaining)
                    })
            }
        })

    }

    return (
        <div>
            my toys is comming {addToys.length}


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                DELETE
                            </th>
                            <th>Name</th>
                            <th>seller Name</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addToys.map(toy => <MyToysRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;