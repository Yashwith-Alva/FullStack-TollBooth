import React from "react";
import { useNavigate } from "react-router-dom";

function UserPageBanner(props) {
  let navigate = useNavigate();

  function HandleClickMoney() {
    navigate(`/user/1/AddMoney`);
  }

  function HandleClickRegister() {
    navigate(`/user/1/vehicleReg`);
  }

  return (
    <div className="UPBanner">
      <div className="LeftBox" onClick={HandleClickMoney}>
        <leftdivDesign></leftdivDesign>
        <h3>Add Money</h3>
      </div>
      <div className="rightBox" onClick={HandleClickRegister}>
        <h3>Register Vehicle</h3>
        <rightdivDesign></rightdivDesign>
      </div>
    </div>
  );
}

export default UserPageBanner;
