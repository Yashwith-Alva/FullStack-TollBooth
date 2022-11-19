import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AdminInit() {
  let { id } = useParams();
  const [admin, setadmin] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    let getMethod = axios
      .get(`http://localhost:3001/admin/byId/${id}`)
      .then((response) => {
        setadmin(response.data);
        console.log(admin);
      });
    return () => {
      clearInterval(getMethod);
    };
  }, [id]);

  return (
    <div>
      <SideBar />
      <h1>Welcome {admin.admin}!</h1>
      <div className="TotalTolls">{admin.numTolls}</div>
    </div>
  );
}

export default AdminInit;
