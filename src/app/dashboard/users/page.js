'use client'
import { callFetcher } from '@/app/helper/fetcher';
import { swalError } from '@/app/helper/functions';
import React, { useEffect, useState } from 'react';
import WithAuth from '../../helper/WithAuth';
import UserList from '../sharedProfile/UserList';

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
        
          <div className='card card-body'>
            <UserList users={users}></UserList>

          </div>
        
    );
};

export default WithAuth(UsersPage);