'use client'
import WithAuth from '@/app/helper/WithAuth';
import { callFetcher } from '@/app/helper/fetcher';
import { swalError } from '@/app/helper/functions';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ModalHistory from '../sharedProfile/ModalHistory';

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

    const [selectedHistory, setSelectedHistory] = useState(null);

    const openModal = (history) => {
    setSelectedHistory(history);
    document.getElementById("my_modal_1").showModal();
  };


    return (
        <div className='card card-body'>
            <h1 >All Users Diagnosis History Data</h1>

            <div className="card card-body">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Pregnancies</th>
                <th>Glucose</th>
                <th>Blood Pressure</th>
                <th>Skin Thickness</th>
                <th>Insulin</th>
                <th>BMI</th>
                <th>Result</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((history) => (
                <tr key={history.id}>
                    <td>{history?.user?.name}</td>
                    <td>{history?.age}</td>
                    <td>{history?.user?.gender}</td>
                    {history?.user?.gender == "female" ? (
                        <td>{history?.pregnancies}</td>
                    ) : (<td>N/A</td>)}
                    <td>{history?.glucose}</td>
                    <td>{history?.mbp}</td>
                    <td>{history?.skin_thickness}</td>
                    <td>{history?.insulin}</td>
                    <td>{history?.bmi}</td>
                    <td>{history?.outcome == 1
                    ? <span className="text-red-600 font-bold">Positive</span>
                    : <span className="text-green-600 font-bold">Negative</span>
                  }</td>
                    
                    <td>
                        <button
                        className="btn btn-neutral"
                        onClick={() => openModal(history)}
                        >
                        View More
                        </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    {/* modal start here */}
    <ModalHistory history={selectedHistory}></ModalHistory>  
    </div>
    );
};

export default WithAuth(DiagnosisHistory);