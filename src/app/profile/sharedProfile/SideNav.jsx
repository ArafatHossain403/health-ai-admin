import Link from 'next/link';
import React from 'react';

const SideNav = () => {
  return (
    <div>
       <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
         
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>   
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href="/profile">Home</Link>
            </li>
            <li>
              <a>Diagnosis</a>
            </li>
            <li>
              <a>Feedback</a>
            </li>
            <li>
              <Link href="/profile/overview" >Overview</Link>
            </li>
            <li>
              <Link href="/profile/offers">Our offerings</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default SideNav;