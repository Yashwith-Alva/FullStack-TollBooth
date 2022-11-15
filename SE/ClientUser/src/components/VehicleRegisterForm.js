import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function VehicleRegisterForm() {
  const [message, setmessage] = "";

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
    <div className="VehicleRegForm">
      <h1>Vehicle Register</h1>
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
          <Field id="inputLogin" name="lastname" placeholder="Enter lastname" />
          <ErrorMessage name="lastname" component="span" />
          <br />

          <label className="LableLogin">Vehicle Type: </label>
          <Field
            id="input login"
            name="vehicleType"
            placeholder="Eg: 4Wheel, 6Wheel, 2Wheel, 8Wheel"
          />
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
        </Form>
      </Formik>
    </div>
  );
}

export default VehicleRegisterForm;
