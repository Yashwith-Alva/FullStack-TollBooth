import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

export const VehicleForm = () => {
  const [message, setmessage] = useState("");

  // Initial Values
  const initialValues = {
    firstname: "",
    lastname: "",
    vehicleType: "",
    vehicleLicensePlate: "",
    dlNo: "",
  };

  //Validation Schema
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("*"),
    lastname: Yup.string().required("*"),
    vehicleType: Yup.string().required("*"),
    vehicleLicensePlate: Yup.string().required("*"),
    dlNo: Yup.string().required("*"),
  });

  // Submit Logic
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
      <div className="VehicleForm">
        <div className="FormTitle">VEHICLE REGISTRATION</div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="FormContainer-VehicleReg">
            <Row className="mb-3">
              <Col>
                <label className="LableLogin">FirstName</label>
                <ErrorMessage
                  name="firstname"
                  component="span"
                  className="ErrorMsg"
                />
                <Field
                  id="inputLogin"
                  name="firstname"
                  placeholder="Enter firstname"
                  className="ExtrasField"
                />
              </Col>
              <Col>
                <label className="LableLogin">LastName </label>
                <ErrorMessage
                  name="lastname"
                  component="span"
                  className="ErrorMsg"
                />
                <Field
                  id="inputLogin"
                  name="lastname"
                  placeholder="Enter Lastname"
                  className="ExtrasField"
                />
              </Col>
            </Row>

            <Row>
              <label className="LableLogin">Email Id</label>
              <label className="DiableDefault">{}</label>
            </Row>

            <Row>
              <label className="LableLogin">Phone Number</label>
              <label className="DiableDefault">{}</label>
            </Row>

            <Row>
              <label className="LableLogin">Age</label>
              <label className="DiableDefault">{}</label>
            </Row>

            <Row>
              <label className="LableLogin">Vehicle Type</label>
              <ErrorMessage
                name="vehicleType"
                component="span"
                className="ErrorMsg"
              />
              <Field name="vehicleType" as="select" className="vehicleSelect">
                <option value="Two Wheeler">Two Wheeler</option>
                <option value="Four Wheeler">Four Wheeler</option>
                <option value="Multi Axle">Multi Axle</option>
              </Field>
            </Row>

            <Row>
              <label className="LableLogin">Vehicle LicensePlate Number </label>
              <ErrorMessage
                name="vehicleLicensePlate"
                component="span"
                className="ErrorMsg"
              />
              <Field
                id="inputLogin"
                name="vehicleLicensePlate"
                placeholder="Enter LicensePlate"
                className="ExtrasField"
              />
            </Row>

            <Row>
              <label className="LableLogin">DL Number </label>
              <ErrorMessage name="dlNo" component="span" className="ErrorMsg" />
              <Field
                id="inputLogin"
                name="dlNo"
                placeholder="Enter Driver License"
                className="ExtrasField"
              />
            </Row>

            <button type="submit" className="VRegButton">
              LogIn
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
