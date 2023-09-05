import { useState } from "react";
import FormProvider from "../../hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../hook-form/RHFTextField";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Eye, EyeSlash } from "@phosphor-icons/react";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName:Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Email must be a valid email address "),
    password: Yup.string().required("password is Required").min(8),
  });

  const defaultValues = {
    firstName:"first name",
    lastName:"last name",
    email: "demo@chat.com",
    password: "123456ffd",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    clearErrors,
    handleSubmit,
    setError,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitted,
      isLoading,
      isSubmitting,
    },
  } = methods;

  const onSubmit = async () => {
    try {
      //server calling code
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (<>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{xs:"column" , sm:"row"}} spacing={2}>
            <RHFTextField name={"firstName"} label="First Name" />
            <RHFTextField name={"lastName"} label={"Last Name"} />
        </Stack>
        <RHFTextField name="email" label="Email Address" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((state) => !state)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        
        <Button
        onClick={() => {}}
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
            my:3,
          bgcolor: "Highlight",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            bgcolor: "darksalmon",
          },
        }}
      >
        Create Account
      </Button>

        </Stack>
        
    </FormProvider>
  </>);
}

export default RegisterForm;
