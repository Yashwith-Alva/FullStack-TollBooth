import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

function ScanForm() {
  const [isValid, setisvalid] = useState(false);
  const [uid, setUid] = useState("");
  const [uidTouched, setUidTouched] = useState(false);
  const [info, setInfo] = useState({});
  const [minMoney, setMoney] = useState(25);
  const [errmsg, seterr] = useState(true);
  const uidValid = uid.length === 12;
  const vobj = {
    T: "Two Wheeler",
    M: "Multi-Axle",
    F: "Four Wheeler",
  };

  const navigate = useNavigate();

  function uidBlurHandler(e) {
    setUidTouched(true);
  }

  function uidChangeHandler(e) {
    setUid(e.target.value);
  }

  function uidCheckHandler(e) {
    if (!uidValid) {
      return;
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    uidCheckHandler();
    const data = {
      uniqueid: uid,
    };

    // Axios: data
    axios
      .post("http://localhost:3001/vehicleIdentification", data)
      .then((response) => {
        if (response.data !== false) {
          setisvalid(true);
          setInfo(response.data);
        } else {
          seterr(false);
        }
      });
  }

  const uidisInvalid = !uidValid && uidTouched;

  return (
    <div className="ScanFormPage">
      <div className={isValid ? "FormRegister" : ""}>
        <Form
          onSubmit={formSubmitHandler}
          style={{
            position: "absolute",
            left: "50%",
            width: "35%",
            top: "30%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: "12px",
            padding: "35px",
            marginTop: "100px",
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Unique ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Unique id"
              value={uid}
              onChange={uidChangeHandler}
              onBlur={uidBlurHandler}
              required
            />
            {uidisInvalid && (
              <p style={{ color: "#b40e0e" }}>
                Please Enter the 12 digit unique id
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-3"></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className={isValid ? "PaymentStat" : "invisibleDiv"}>
        <h3 style={{ color: "#7ef9ff" }}>
          Name: {info.firstname} {info.lastname}
        </h3>
        <h3 style={{ color: "#7ef9ff" }}>LicensePlate: {info.LicensePlate}</h3>
        <h3 style={{ color: "#7ef9ff" }}>Vehicle Type: Two Wheeler</h3>
        <br />
        <br />
        <h3 style={{ color: "white" }}>
          {info.moneyStored > minMoney
            ? "Can pay through Auto-toll"
            : "Doesn't have enough cash in Auto-toll"}
        </h3>
        <br />
        <button
          className={
            info.moneyStored > minMoney ? "ConfirmPayment" : "ManualPayment"
          }
          onClick={() => {
            if (info.moneyStored > minMoney) {
              alert("Payment Done Successfully!");
              // I have to update user!
              // and toll stats
            } else {
              alert("Payment done Manually!");
              // I have to update toll stats only.
            }
            navigate(0);
          }}
        >
          {info.moneyStored > minMoney ? "ConfirmPayment" : "ManualPayment"}
        </button>
      </div>
    </div>
  );
}

export default ScanForm;
