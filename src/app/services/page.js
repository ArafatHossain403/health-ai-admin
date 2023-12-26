'use client'
import React from "react";
import withAuth from "../helper/withAuth";

const ServicesPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <h1 className="text-center text-lg font-bold">
                Diabetes Prediction Form
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pregnancis</span>
                </label>
                <input
                  type="tel"
                  placeholder="Pregnancis"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Glucose</span>
                </label>
                <input
                  type="tel"
                  placeholder="Glucose"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood Pressure</span>
                </label>
                <input
                  type="tel"
                  placeholder="Blood Pressure"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Skin Thickness</span>
                </label>
                <input
                  type="tel"
                  placeholder="Skin Thickness"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Insulin</span>
                </label>
                <input
                  type="tel"
                  placeholder="number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">BMI</span>
                </label>
                <input
                  type="tel"
                  placeholder="BMI"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Diabetes Pedigree Function</span>
                </label>
                <input
                  type="tel"
                  placeholder="number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="tel"
                  placeholder="Age"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ServicesPage);
