import PropTypes from "prop-types";
import { useFormContext, useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

RHFTextField.protoTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextField({ name, helperText, ...other }) {
  const { control } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return(
            <>
            <TextField
              {...field}
              fullWidth
              value={
                typeof field.value === "number" && field.value === 0
                  ? ""
                  : field.value
              }
              error={!!error}
              helperText={error ? error.message : helperText}
              {...other}
            />
          </>
        )
      }}
    />
  );
}
