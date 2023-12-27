'use client'
import React, { useEffect, useState } from 'react';

const UsersPage = () => {
    
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsersData = async () => {
        try {
          const response = await callFetcher('user/list', 'GET', null, {});
          if (response.ok) {
            const data = await response.json();
            setUsers(data);
          } else {
            console.error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error during data fetching', error);
        }
      };
  
      fetchUsersData();
    }, []);

    return (
        <div>
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

export default withAuth(sersPage);