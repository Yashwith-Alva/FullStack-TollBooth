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
    const admindata = { admin: data.username, password: data.password };

    axios
      .post("http://localhost:3001/admin/login", admindata)
      .then((response) => {
        console.log(response.data);

        if (response.data.admin === admindata.admin) {
          navigate(`/admin/${response.data.id}`);
          onValid(true);
        } else {
          console.log(" Couldnt navigate");
          onValid(false);
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
        <Form className="LoginFormContainer">
          <div style={{ fontWeight: "400", fontSize: "1.2em" }}>
            SIGN INTO YOUR ACCOUNT
          </div>
          <br />
          <label className="LableLogin">Admin</label>
          <br />
          <Field id="inputLogin" name="username" placeholder="Enter username" />
          <ErrorMessage name="username" component="div" className="error" />
          <br />
          <br />
          <label className="LableLogin">Password: </label>
          <br />
          <Field id="inputLogin" name="password" placeholder="Enter password" />
          <ErrorMessage name="password" component="div" className="error" />
          <br />
          <br />
          <span>{loginValid ? "" : "Username or Password is Invalid"}</span>
          <button type="submit">LogIn</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
