'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { callFetcher } from '../helper/fetcher';

const SignupPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await callFetcher('user', 'post', formData);
      if (response.ok) {
        // Show SweetAlert for success
        Swal.fire({
          title: 'Signup Successful!',
          text: 'You have successfully signed up.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Optionally, you can redirect the user after successful signup
        // router.push('/success'); // Import useRouter from 'next/router'

        // Reset the form data
        setFormData({
          name: '',
          email: '',
          password: '',
          mobile: '',
          address: '',
        });
      } else {
        // Handle error, e.g., show an error message
        console.error('Signup failed');
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
         
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
      <h1 className='text-center text-lg font-bold'>
        Please Signup
      </h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="name"
          name="name"
          placeholder="name"
          className="input input-bordered"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Mobile</span>
        </label>
        <input
          type="tel"
          name="mobile"
          placeholder="number"
          className="input input-bordered"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input input-bordered"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="label">
          <Link href="#" className="label-text-alt link link-hover">
            Do Have an Account?
          </Link>
        </label>
        <Link href="/login" className="link link-accent" passHref>
        Login
        </Link>
      </div>

      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">Signup</button>
      </div>
    </form>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default SignupPage;