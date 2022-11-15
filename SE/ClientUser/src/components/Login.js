import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  const [loginValid, setLoginValid] = useState(true);
  let navigate = useNavigate();

  const initValues = {
    username: "",
    password: "",
  };

  const ValidateSchema = Yup.object().shape({
    username: Yup.string().required("Must input a username"),
    password: Yup.string().min(8).required("Must input password"),
  });

  const onValid = (isvalid) => {
    if (isvalid) {
      setLoginValid(true);
    } else {
      setLoginValid(false);
    }
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/usersLog", data).then((response) => {
      onValid(response.data.isValid);
      if (response.data.isValid === true) {
        navigate(`/user/${response.data.id}`);
      } else {
        console.log("Can't navigate!");
      }
    });
  };

  return (
    <div className="LoginForm">
      <h1 className="FormHeading">LOGIN</h1>
      <Formik
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={ValidateSchema}
      >
        <Form className="FormContainer">
          <label className="LableLogin">Username: </label>
          <Field id="inputLogin" name="username" placeholder="Enter username" />
          <ErrorMessage name="username" component="span" />
          <br />
          <label className="LableLogin">Password: </label>
          <Field id="inputLogin" name="password" placeholder="Enter password" />
          <ErrorMessage name="password" component="span" />
          <br />

          <span>{loginValid ? "" : "Username or Password is Invalid"}</span>
          <span>{loginValid ? "" : ""}</span>
          <button type="submit">LogIn</button>
        </Form>
      </Formik>
      <h6>
        <a href="http://localhost:3000/signup">New user? SignUp</a>
      </h6>
    </div>
  );
}

export default Login;
