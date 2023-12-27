'use client'
import { callFetcher } from '@/app/helper/fetcher';
import { swalError } from '@/app/helper/functions';
import React, { useEffect, useState } from 'react';
import WithAuth from '../../helper/WithAuth';

const UsersPage = () => {
    
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsersData = async () => {
        try {
          const response = await callFetcher('user/list', 'GET');
          if (response) {
            setUsers(response);
          }
        } catch (error) {
          swalError(error.message);
        }
      };
  
      fetchUsersData();
    }, []);

    return (
        <div className="card card-body">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default WithAuth(UsersPage);