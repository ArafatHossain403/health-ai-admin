'use client'
import React from "react";
import WithAuth from "../helper/WithAuth";

const Dashboard = ({adminData}) => {
  return (
    <div className="card card-body">
      <h2>Hello, {adminData?.name}</h2>
    </div>
  );
};

export default WithAuth(Dashboard);
