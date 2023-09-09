import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

RHFAutoComplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFAutoComplete({ name, helperText, label, ...other }) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <Autocomplete
              {...field}
              {...other}
              fullWidth
              value={field.value === "" ? [] : field.value}
              defaultValue={field.value === "" ? undefined : field.value}
              onChange={(event, newValue) => {
                setValue(name, newValue, { shouldValidate: true });
              }}
              renderInput={(params) => (
                <TextField
                  label={label}
                  error={!!error}
                  // helperText={JSON.stringify(field.value)}
                  helperText={error ? error.message : helperText}
                  {...params}
                />
              )}
              
              />
          </>
        );
      }}
    />
  );
}
