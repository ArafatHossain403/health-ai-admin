'use client'
import withAuth from '@/app/helper/withAuth';
import React from 'react';

const offerPage = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Healthcare Artificial Intelligence</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">Overall, health AI holds promise in transforming healthcare by improving patient outcomes, operational efficiency, and the overall delivery of medical services..</p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">jan 15, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Digital Health AI</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0" />
              Predictive Analytics,
              Diagnosis and Imaging,
              Predictive Analytics
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">  Drug Discovery and Development: AI expedites drug discovery by analyzing vast datasets and simulating molecular interactions, potentially reducing the time and cost of bringing new drugs to market.

Personalized Medicine: AI helps tailor treatments to individual patients by considering genetic, environmental, and lifestyle factors, leading to more effective and targeted therapies..</p>
        </div>
       
      </article>
      {/* More posts... */}
      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Diabetes Pedigree !</h2>
    <p>AI expedites drug discovery by analyzing vast datasets and simulating molecular</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Subscription</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Blood pressure!</h2>
    <p>AI streamlines administrative tasks like scheduling, billing, and managing patient records</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Subscription</button>
    </div>
  </div>
</div>
    </div>
  </div>
</div>

    </div>
  );
};

export default withAuth(offerPage);