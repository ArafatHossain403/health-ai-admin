'use client'
import WithAuth from '@/app/helper/WithAuth';
import { callFetcher } from '@/app/helper/fetcher';
import { swalError } from '@/app/helper/functions';
import React, { useEffect, useState } from 'react';
import DiagnosisHistoryTable from '../sharedProfile/DiagnosisHistoryTable';

const DiagnosisHistory = () => {
    const [histories, setHistories] = useState([]);
  
    useEffect(() => {
      const fetchUsersHistory = async () => {
        try {
          const response = await callFetcher('user/diagnose/diabetes/history/all', 'GET');
          if (response) {
            setHistories(response);
          }
        } catch (error) {
          swalError(error.message);
        }
      };
  
      fetchUsersHistory();
    }, []);


    return (
        <DiagnosisHistoryTable histories={histories}></DiagnosisHistoryTable>
    );
};

export default WithAuth(DiagnosisHistory);