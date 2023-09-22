import { useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import {
  Alert,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { SignUpUser } from "../../RTK/Slices/authSlice";
import { Navigate } from "react-router-dom";
import FormBtn from "../../components/FormBtn";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Email must be a valid email address "),
    password: Yup.string().required("password is Required").min(8),
  });

  const defaultValues = {
    firstName: "first name",
    lastName: "last name",
    email: "demo@chat.com",
    password: "123456ffd",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //server calling code
      const result = dispatch(SignUpUser(data));
      result
        .then((res) => {
          return <Navigate to/>
        })
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          {!!errors.firstName && (
            <Alert severity="error">
              FirstName: {errors.firstName.message}
            </Alert>
          )}
          {!!errors.lastName && (
            <Alert severity="error">LastName: {errors.lastName.message}</Alert>
          )}
          {!!errors.email && (
            <Alert severity="error">Email: {errors.email.message}</Alert>
          )}
          {!!errors.password && (
            <Alert severity="error">Password: {errors.password.message}</Alert>
          )}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
                  <IconButton
                    onClick={() => setShowPassword((state) => !state)}
                  >
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormBtn value="Create Account"/>
          
        </Stack>
      </FormProvider>
    </>
  );
}

export default RegisterForm;
