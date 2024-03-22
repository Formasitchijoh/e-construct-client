import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CustomInput = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    type,
    placeholder,
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange(name)(e.target.value);
  };

  return (
    <div className="flex w-full justify-center items-center">
      <TextField
        id="standard-basic"
        label={`${placeholder}`}
        type={type}
        className="rounded-md w-full p-3"
        variant="outlined"
        value={value}
        onChange={handleInputChange}
        onBlur={onBlur}
      />
      {hasError && (
        <span className="text-red-500 text-sm font-bold">{errors[name]}</span>
      )}
    </div>
  );
};

export default CustomInput;
