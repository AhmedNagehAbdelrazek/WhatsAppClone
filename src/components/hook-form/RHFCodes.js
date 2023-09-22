import { Stack, TextField } from "@mui/material";
import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

function RHFCodes({ keyName = "", inputs = [], ...other }) {
  const codesRef = useRef(null);
  const { control } = useFormContext();

  const handleChangeWithTextField = (event, handleChange) => {
    const { maxLength, value, name } = event.target;
    

    const fieldIndex = Number(name.replace(keyName, ""));
    const nextField = document.querySelector(
      `input[name=${keyName}${fieldIndex+1}]`
    );
    if (value.length > maxLength) {
      event.target.value = value[0];
    }
    if (value.length >= maxLength && fieldIndex < 6 && nextField !== null) {
      nextField.focus();
    }

    handleChange(event);
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" ref={codesRef}>
      {inputs.map((name, index) => {
        return (
          <Controller
            key={name}
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                value={""}
                {...field}
                error={!!error}
                autoFocus={index === 0}
                placeholder="_"
                onChange={(e) => {
                  handleChangeWithTextField(e, field.onChange);
                }}
                onFocus={(e) => {
                  e.currentTarget.select();
                }}
                InputProps={{
                  sx: {
                    width: { xs: 36, sm: 56 },
                    height: { xs: 36, sm: 56 },
                    "& input": {
                      p: 0,
                      textAlign: "center",
                    },
                  },
                }}
                inputProps={{
                  maxLength: 1,
                  type: "number",
                }}
                {...other}
              />
            )}
          />
        );
      })}
    </Stack>
  );
}

export default RHFCodes;
