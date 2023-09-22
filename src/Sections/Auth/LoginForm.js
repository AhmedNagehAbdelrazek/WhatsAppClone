import { useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { Link as RouterLink } from "react-router-dom"; 
import {
  Alert,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../RTK/Slices/authSlice";
import FormBtn from "../../components/FormBtn";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();


  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Email must be a valid email address "),
    password: Yup.string().required("password is Required").min(8),
  });

  const defaultValues = {
    email: "demo@chat.com",
    password: "123456ffd",
  };

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    setError,
    formState: {
      errors,
    },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //server calling code
      // console.log(data);
      dispatch(LoginUser(data));
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
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        
        {!!errors.email && (<Alert severity="error" >Email: {errors.email.message}</Alert> )}
        {!!errors.password && (<Alert severity="error" >Password: {errors.password.message}</Alert> )}

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
      </Stack>
      <Stack alignItems={"end"} sx={{ my: 2 }}>
        <Link to={"/auth/reset-password"} component={RouterLink} variant="body2" color={"inherit"} underline="always">
          Forget Password?
        </Link>
      </Stack>
      <FormBtn value="login"/>
    </FormProvider>
  );
}

export default LoginForm;
