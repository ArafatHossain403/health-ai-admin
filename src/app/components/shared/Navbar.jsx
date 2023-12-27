'use client'
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {

  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
   
    Cookies.remove("token");

    window.location.href= "/";
  };
  

  return (
    <div>
      <div className="navbar bg-gray-950 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <Link href="/services">Service</Link>
              </li>
              <li>
                <Link href="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">Health AI Admin</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Service</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
          </ul> */}
        </div>
        <div className="navbar-end">
        {isAuthenticated ? (
            
            <>
            <Link href="/dashboard" className="pr-4">
              Profile
            </Link>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
            </>
          ) : (
          
          <div>
            
            <Link href="/login" className="btn">
              Login
            </Link>
          </div>
          )}
      
        </div>
      </div>
    </div>
  );
};

export default Navbar;
