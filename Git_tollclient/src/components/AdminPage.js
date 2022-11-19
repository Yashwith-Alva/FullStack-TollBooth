import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";

function AdminPage() {
  let { id } = useParams();
  const [adminid, setadminid] = useState({});

  // Cleaning up useEffect!!
  useEffect(() => {
    let getMethod = axios
      .get(`http://localhost:3001/admin/byId/${id}`)
      .then((response) => {
        setadminid(response.data);
      });

    return () => {
      clearInterval(getMethod);
    };
  }, [id]);

  return (
    <div>
      <SideBar />
      <div className="AdminPage">
        <div className="PageHeader">Welcome {adminid.admin}!</div>
        <div className="DashboardDiv">Dashboard Div</div>
        <div className="TollDetails">Toll Details</div>
        <div className="Money">Money</div>
        <div className="Support">Support</div>
      </div>
    </div>
  );
}

export default AdminPage;
