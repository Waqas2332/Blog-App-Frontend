import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Spinner from "./Spinner";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center hero h-screen">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: Partial<FormValues> = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/auth/login",
              values
            );
            sessionStorage.setItem("token", response.data.token);
          } catch (error) {
            console.log(error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="font-bodyFont form rounded px-8 pt-6 pb-8 mb-4 w-1/3">
            <div className="mb-4">
              <label htmlFor="email" className="block  text-sm font-bold mb-2">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-800 text-xs italic"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block  text-sm font-bold mb-2"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn w-20 flex justify-center items-center"
              >
                {isSubmitting ? <Spinner /> : "Sign In"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
