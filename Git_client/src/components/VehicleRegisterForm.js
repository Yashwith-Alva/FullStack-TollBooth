import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { HeaderNav } from "./HeaderNav";
import * as Yup from "yup";
import axios from "axios";

function VehicleRegisterForm() {
  const [message, setmessage] = useState("");

  const initValues = {
    username: "",
    vehicleType: "",
    LicensePlate: "",
    dlno: "",
  };

  const ValidateSchema = Yup.object().shape({
    firstname: Yup.string().required("*"),
    lastname: Yup.string().required("*"),
    vehicleType: Yup.string().required("*"),
    LicensePlate: Yup.string().required("*"),
    dlno: Yup.string().required("*"),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/vehicleRegister", data)
      .then((response) => {
        console.log("It Worked!!");
        setmessage(response.data);
      });
  };

  return (
    <div>
      <HeaderNav />

      <div className="VehicleRegContainer">
        <div class="brand-title">VEHICLE REG</div>
        <span>{message}</span>
        <Formik
          initialValues={initValues}
          onSubmit={onSubmit}
          validationSchema={ValidateSchema}
        >
          <Form className="FormContainer-Signup">
            <label className="LableLogin">FirstName: </label>
            <Field
              id="inputLogin"
              name="firstname"
              placeholder="Enter firstname"
            />
            <ErrorMessage name="firstname" component="span" />
            <br />
            <label className="LableLogin">Lastname: </label>
            <Field
              id="inputLogin"
              name="lastname"
              placeholder="Enter lastname"
            />
            <ErrorMessage name="lastname" component="span" />
            <br />

            <label className="LableLogin">Vehicle Type: </label>
            <select name="vehicleType">
              <option value="" lable="selectVehicleType">
                Select Vehicle Type
              </option>

              <option value="4W" lable="4W">
                4 Wheeler
              </option>

              <option value="HeavyTruck" lable="HeavyTruck">
                HeavyTruck
              </option>
            </select>
            <ErrorMessage name="vehicleType" component="span" />
            <br />

            <label className="LableLogin">LicensePlate: </label>
            <Field
              id="input login"
              name="LicensePlate"
              placeholder="License Plate Number"
            />
            <ErrorMessage name="LicensePlate" component="span" />
            <br />

            <label className="LableLogin">DL No: </label>
            <Field id="input login" name="dlno" placeholder="Enter DLNo" />
            <ErrorMessage name="dlno" component="span" />
            <br />

            <button type="submit">LogIn</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default VehicleRegisterForm;
