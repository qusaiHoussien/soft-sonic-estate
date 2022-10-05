import React from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";

const validateUserData = (userData) => {
  const errors = {};

  if (!userData.UserName) {
    errors.UserName = "Please Enter User Name";
  } else if (userData.UserName.length > 20) {
    errors.UserName = "Name cannot exceed 20 characters";
  }

  if (!userData.Password.length < 6) {
    errors.Password = "Password have to 6 character minimum";
  }

  return errors;
};

export default function Login() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Password: "",
    },
    validate: validateUserData,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <>
      {/** centralize the form */}
      <div className="container justify-content-center  d-flex mt-5 mb-5">
        <Form onSubmit={formik.handleSubmit}>
          {/**put border and rounded it */}
          <div className="p-3 m-2 border border-1 border-info rounded">
            <h3 className="">Login As_user</h3>
            <div className="bg-primary w-45 h-3"></div>
            {/**this div have all element in form */}
            <div className="form-group mt-3">
              {/** input for email or user name */}
              <label className="fs-6">Email/UserName</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="user@gmail.com"
                id="UserName"
                value={formik.values.UserName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.UserName && formik.errors.UserName ? (
                <span className="text-danger">{formik.errors.UserName}</span>
              ) : null}

              {/**input for password */}
              <label className="mt-2 d-flex">Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="password"
                id="Password"
                value={formik.values.Password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.Password && formik.errors.Password ? (
                <span className="text-danger">{formik.errors.Password}</span>
              ) : null}
              {/**remember me check box */}
              <div className="d-flex">
                <div className="form-check col mt-2 ms-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    RememberMe
                  </label>
                </div>
                {/** forgot password link */}
                <p className="col forgot-password text-right mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
              {/**login button */}
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              {/**create account link */}
              <p className="forgot-password text-right mt-2">
                You don't have an account <a href="#">Create Account?</a>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
