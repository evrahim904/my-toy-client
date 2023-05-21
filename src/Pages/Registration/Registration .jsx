import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Registration  = () => {
    const {createUser,updateUserData} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUP = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
       console.log(name , email,photo, password)

       createUser(email,password)
       .then(result =>{
        const user = result.user;
        console.log(user)
        updateUserData(result.user, name ,photo)
        event.target.reset()
        navigate('/')
       })
       .catch(error => console.log(error))


        
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body ">
            <h1 className="text-5xl font-bold">Registration</h1>
           <form onSubmit={handleSignUP}>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
              </div>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
           </form>

           <p>Already have an account?<Link to="/login"  className="underline text-sky-500">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration ;