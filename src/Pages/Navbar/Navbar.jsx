import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <p>item 2</p>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img className='w-20 rounded-lg mr-2' src={logo} alt="" />
                <h1>Tiny Speedstars</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <Link to="/"> Home</Link>
                  
                    <Link to="/blog"> Blog</Link>
                    <Link to="/alltoys"> All Toys</Link>
                    {
                        user?.email ?
                            <>
                                <Link to="/addtoys"> Add A Toy</Link>
                                
                                <Link to="/mytoys"> My Toys</Link>

                            </>
                            :
                            ''
                    }
                </ul>
            </div>
            {user ?
                <div className=" navbar-end" >

                    <Link><button className='me-4 btn btn-info btn-sm' onClick={handleLogOut}>logout</button>
                    </Link>
                    <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-10 " >
                            <img  src={user.photoURL} />
                        </div>
                    </div>
                </div>
                : <Link className=" navbar-end" to="/login"><button className='btn btn-success '>Login</button></Link>
            }
        </div>
    );
};

export default Navbar;