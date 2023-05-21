import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const [error,setError] = useState()
    const {signIn,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = event =>{
        event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        // ***/ validation/***/
       if(password.length < 6){
        setError('password should be 6 character')
       }
       if (!email || email.length === 0) {
        setError( 'Email cannot be empty');
      }
       if (!password || password.length === 0) {
        setError( 'password cannot be empty');
      }
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            event.target.reset()
        navigate('/')

        })
        .catch(error => console.log(error))

    }
    const handleSignIn = ()=>{
        signInWithGoogle()
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <div className="card-body ">
      <h1 className="text-5xl font-bold"> Please Login</h1>
     <form onSubmit={handleLogin}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
     </form>
     <div className="form-control mt-2 ">
          <button onClick={handleSignIn} className="btn btn-primary">Google Sign In</button>
        </div>
     <p className="text-center"> new to speedstars?<Link to="/registration" className="underline text-sky-500">Registration</Link></p>
      {
        <p className="text-yellow-500 text-center">{error}</p>
      }
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;