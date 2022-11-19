import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function SignUp() {
  const [message, setmessage] = useState("");

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const initValues = {
    username: "",
    emailId: "",
    phone: "",
    age: "",
    gender: "male",
    address: "",
    password: "",
    confirmpassword: "",
  };

  const ValidateSchema = Yup.object().shape({
    username: Yup.string().required("*"),
    emailId: Yup.string().email().required("*"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    age: Yup.number().lessThan(60).moreThan(18).required("*"),
    gender: Yup.string().required("*"),
    address: Yup.string().required("*"),
    password: Yup.string().min(8).required("*"),
    confirmpassword: Yup.string().min(8).required("*"),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:3001/user/signup", data).then((response) => {
      console.log("It Worked!!");
      setmessage(response.data);
    });
  };

  return (
    <div className="SignUpForm">
      <h1 className="FormHeading">SIGNUP</h1>
      <span className="ErrorTop">{message}</span>
      <Formik
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={ValidateSchema}
      >
        <Form className="FormContainer-Signup">
          <label className="LableLogin">Username: </label>
          <Field id="inputLogin" name="username" placeholder="Enter username" />
          <ErrorMessage name="username" component="span" />
          <br />

          <label className="LableLogin">Email: </label>
          <Field id="inputLogin" name="emailId" placeholder="eg: Harry@..." />
          <ErrorMessage name="emailId" component="span" />
          <br />

          <label className="LableLogin">PhoneNo: </label>
          <Field id="inputLogin" name="phone" />
          <ErrorMessage name="phone" component="span" />
          <br />

          <label className="LableLogin">Age: </label>
          <Field id="inputLogin" name="age" />
          <ErrorMessage name="age" component="span" />
          <br />

          <label className="LableLogin">Gender: </label>
          <Field id="inputLogin" name="gender" />
          <ErrorMessage name="gender" component="span" />
          <br />

          <label className="LableLogin">Address: </label>
          <Field id="inputLogin" name="address" />
          <ErrorMessage name="address" component="span" />
          <br />

          <label className="LableLogin">Password: </label>
          <Field id="inputLogin" name="password" placeholder="password" />
          <ErrorMessage name="password" component="span" />
          <br />

          <label className="LableLogin">Confirm Password: </label>
          <Field
            id="inputLogin"
            name="confirmpassword"
            placeholder="Confirm password"
          />
          <ErrorMessage name="confirmpassword" component="span" />
          <br />

          <button type="submit">signup</button>
        </Form>
      </Formik>
      <h6>
        <a href="http://localhost:3006/login">Sign In</a>
      </h6>
    </div>
  );
}

export default SignUp;
