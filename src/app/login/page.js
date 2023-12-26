'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { callFetcher } from '../helper/fetcher';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      
      const response = await callFetcher('/login', 'POST', { email, password });

      if (response.ok) {
         const { accessToken } = await response.json();
        
        //localStorage.setItem('token', accessToken);
        Cookies.set('token', accessToken);
        
        router.push('/profile');
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <h1 className="text-center text-lg font-bold">Please Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Do not Have an Account?
                  </a>
                </label>
                <Link className="link link-accent" href="/signup">
                  Signup
                </Link>
              </div>
              <div className="form-control mt-6">
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
