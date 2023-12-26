'use client'
import React from "react";
import withAuth from "../helper/withAuth";

const userPage = () => {
  return (
    <div>
      <h2>this is profile page</h2>
      
    </div>
  );
};

export default withAuth(userPage);
