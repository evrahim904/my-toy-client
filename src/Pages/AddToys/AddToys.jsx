import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/UseTitle";


const AddToys = () => {
    useTitle('Add A Toys')
const {user} = useContext(AuthContext);
    const handleAddToy = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const category = form.category.value;
        const price = form.price.value;
        const Rating = form.Rating.value;
        const quantity = form.quantity.value;
        const details = form.detail.value;
        const order = {name, photo,sellerName,email,category,price,Rating,quantity,details}
        console.log(order)

        fetch('https://my-toys-server.vercel.app/adding',{
            method:'POST',
            headers:{
                  'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data =>{ console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Toy has been saved',
                    showConfirmButton: false,
                    timer: 1000
                  })
                  event.target.reset()
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">toy name</span>
                        </label>
                        <input type="text" name="name" placeholder="toy name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" />
              </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName } name="sellerName" placeholder="seller name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="seller email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <select name="category" id="">
                            <option className="input input-bordered" value="sports car">sports car </option>
                            <option className="input input-bordered" value="truck"> truck</option>
                            <option className="input input-bordered" value="police car">police car</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="Rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                    </div>
                  
                </div>
                <div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="detail" placeholder="Detail description" className="input input-bordered textarea h-24  " />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="add a toy" />
                </div>
            </form>

        </div>

    );
};

export default AddToys;