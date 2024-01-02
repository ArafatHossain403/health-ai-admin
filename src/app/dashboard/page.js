"use client";
import React, { useEffect, useState } from "react";
import WithAuth from "../helper/WithAuth";
import AdminCard from "./sharedProfile/AdminCard";
import AdminChart from "./sharedProfile/AdminChart";
import UserList from "./sharedProfile/UserList";
import { callFetcher } from "../helper/fetcher";
import { swalError } from "../helper/functions";
import Link from "next/link";
import UsersHistory, {
  DiagnosisHistoryTable,
} from "./sharedProfile/DiagnosisHistoryTable";

const Dashboard = ({ adminData }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await callFetcher("user/list", "GET");
        const data = response.slice(0, 5);
        if (data) {
          setUsers(data);
        }
      } catch (error) {
        swalError(error.message);
      }
    };

    fetchUsersData();
  }, []);

  const [histories, setHistories] = useState([]);
  useEffect(() => {
    const fetchUsersHistory = async () => {
      try {
        const response = await callFetcher(
          "user/diagnose/diabetes/history/all",
          "GET"
        );
        const data = response.slice(0, 5);
        if (data) {
          setHistories(data);
        }
      } catch (error) {
        swalError(error.message);
      }
    };

    fetchUsersHistory();
  }, []);

  return (
    <div className="card card-body">
      <h2 className="font-bold text-center text-lg">
        Hello, {adminData?.name}
      </h2>
      <div className="stat">
        <div className="stat-title font-bold">
          Name:{" "}
          <span className="stat-value text-red-600 text-sm">
            {adminData?.name}
          </span>
        </div>
        <div className="stat-title font-bold">
          Email:{" "}
          <span className="stat-value text-red-600 text-sm">
            {adminData?.email}
          </span>
        </div>
      </div>
      <h1 className="font-bold text-center text-lg">User List</h1>

      <div className="text-center mb-10">
        <UserList users={users}></UserList>
        <Link className="btn btn-info " href={"/dashboard/users"}>
          See All
        </Link>
      </div>
      <div className="text-center">
        <DiagnosisHistoryTable histories={histories}></DiagnosisHistoryTable>
        <Link className="btn btn-info " href={"/dashboard/diagnosis-history"}>
          See All
        </Link>
      </div>
    </div>
  );
};

export default WithAuth(Dashboard);
