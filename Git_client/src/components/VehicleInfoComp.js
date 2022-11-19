import React from "react";

const styleText = {
  fontFamily: "Montressa",
  fontWeight: "600",
  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
  backgroundColor: "#a0d2eb",
  borderRadius: "5px",
  width: "250px",
  height: "60px",
};

function VehicleInfoComp(props) {
  return (
    <div>
      <div className="vehicleInfoLayout">
        <h5>{props.info.vehicleType}</h5>

        <h2 style={styleText}>{props.info.vehicleUniqueId}</h2>

        <h5>{props.info.LicensePlate}</h5>

        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default VehicleInfoComp;
