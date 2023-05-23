import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import useTitle from "../../Hooks/UseTitle";

const AllToys = () => {
    const allToys = useLoaderData()
    console.log(allToys)
    useTitle('All Toys')
    return (
        <div>
        <h3 className="text-center text-5xl pb-4">All Toy Car Collection</h3>
        {/* search bar start */}

        <div className="flex items-center justify-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>

        {/* search bar end */}


       <div className="overflow-x-auto w-full">
           <table className="table w-full">
               {/* head */}
               <thead>
                   <tr>
                       <th>seller Name</th>
                       <th>Toy Name</th>
                       <th>Sub-category</th>
                       <th>Price</th>
                       <th>Available quantity</th>
                       <th> view details</th>
                   </tr>
               </thead>
               <tbody>
                   {
                     allToys.map(allToy => <AllToysRow
                     
                     key={allToy._id}
                     allToy={allToy}
                     >


                     </AllToysRow>)  
                   }
               </tbody>

           </table>
       </div>
   </div>
    );
};

export default AllToys;