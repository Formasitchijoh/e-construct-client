import * as yup from "yup";

export const validationSchema = yup.object().shape({
  fullname: yup.string().required("Field Required"),
  email: yup.string().email().required("Email Required"),
  password: yup
    .string()
    .matches(/\w*[a-z]w*/, "Paword must have letters")
    .matches(/\w*[A-Z]w*/, "Password must have Capital Letters")
    .matches(/\d/, "Password must have numbers")
    .matches(
      /[!@#$%^&*()_+<>.,:";'{}=-]/,
      "Paword must contain special characters",
    )
    .min(
      8,
      ({ min }) => `Password must be characters at least ${min} characters`,
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password do not match")
    .required("Confirm password is required"),
  contact: yup.string().matches(/(\d){8}\b/, "Ente a valid phone number"),
  userType: yup.string().required("User type required"),
});
