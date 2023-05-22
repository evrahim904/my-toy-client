import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className=" footer bg-neutral py-8 p-10 text-neutral-content">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
            <h3 className="text-lg font-bold">tiny speedstars</h3>
          </div>
          <div className="text-sm">
            <p>Contact Information:</p>
            <p>Email: toycar@gmail.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="text-sm">
            <p>Follow Us:</p>
            <div className="flex">
              <a href="#" className="mr-2">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="mr-2">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
          <div className="text-sm">
            <p>Address:</p>
            <p>1234 Street, dhaka, bangladesh</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
