import { useLoaderData } from "react-router-dom";

const UpdateCar = () => {
const toy = useLoaderData()
const { _id, price, quantity,details } = toy;

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.detail.value;
        const UpdateCar = {price,quantity,details}
        console.log(UpdateCar)

        fetch(`http://localhost:5000/adding/${_id}`,{
            method:'PUT',
            headers:{
                  'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCar)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
       
    }
    return (
        <form onSubmit={handleUpdate}>
            <h1 className="text-center text-5xl pb-4">Update Toy Car Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">available quantity</span>
                    </label>
                    <input type="text" defaultValue={quantity} name="quantity" placeholder="quantity" className="input input-bordered" />
                </div>
               
            </div>
            <div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="detail"  defaultValue={details}placeholder="Detail description" className="input input-bordered textarea h-24  " />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update toy Car" />
                </div>
        </form>
    );
};

export default UpdateCar;