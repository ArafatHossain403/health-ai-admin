import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/doctor-pic-aboutus.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold"> About Us!</h1>
            <p className="py-6">
            Health AI, the convergence of healthcare and artificial intelligence, stands as a beacon of transformative innovation. Its prowess lies in decoding complex medical data, empowering diagnostics, personalizing treatments,and revolutionizing patient care. With machine learning and predictive analytics at its core, Health AI is reshaping the future of medicine, fostering precision, accessibility, and ultimately, better health outcomes for all.
            </p>
            <Link href="/" button className="btn btn-primary">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
