import React from "react";
import * as Yup from "yup";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  ErrorMessage,
  Formik,
} from "formik";

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

export const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;

  return (
    <Form>
      <h1>{message}</h1>
      <Field name="email" type="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <Field name="password" type="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message: string;
}
function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values

  mapPropsToValues: (props: any) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!validateEmail(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  },

  handleSubmit: (values) => {
    // do submitting things
  },
})(InnerForm);

//Add a custom validation function (this can be ayncs tool!)

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values: any, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const Basic = () => (
  <div>
    <h1>My App</h1>
    <p>This can be anywhere in your application</p>
    {/* <MyForm message="Sign Up"/> */}
    <SignupForm />
  </div>
);

export default Basic;
