import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
         <img className="rounded-lg" src={logo} alt="" />
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <Link to="/"> Home</Link>
                  
                  <Link to="sectionOne"> Blog</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;