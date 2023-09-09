import { useState } from "react";

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import NewPassword from './../../pages/Auth/NewPassword';
import RHFTextField from "../../components/hook-form/RHFTextField";
import FormProvider from "../../components/hook-form/FormProvider";

export default function NewPasswordForm() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState();

  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string().required("Password is Required").min(8),
    confirmPassword: Yup.string()
      .required("Confirm Password is Required").oneOf([Yup.ref('newPassword'),null],"The Confirm-Password and New-Password Don't Match"),
  });

  const defaultValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
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
//   function handleConfirmPassword(e){
//     if(e.target.value !== newPassword){
//         setError('confirmPassword',{message:"The Confirm Password and New Password Don't Match"});
//     }
//   }
  console.log(errors.afterSubmit);
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.newPassword && (<Alert severity="error" >New Password: {errors.newPassword.message}</Alert> )}
        {!!errors.confirmPassword && (<Alert severity="error" >Confirm Password: {errors.confirmPassword.message}</Alert> )}
        <RHFTextField
          name="newPassword"
          label="New Password"
          type={showNewPassword ? "text" : "password"}
        //   onChange={(e)=>{setNewPassword(e.target.value); clearErrors();  console.log(e.target.value);}}
        //   value={newPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowNewPassword((state) => !state)}>
                  {showNewPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
        //   onBlur={handleConfirmPassword}
          name="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
        //   onChange={(e)=>{clearErrors(); setConfirmPassword(e.target.value)}}
        //   value={confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirmPassword((state) => !state)}>
                  {showConfirmPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      
      <Stack alignItems={"end"} sx={{ my: 2 }}>
        <Link
          to={"/auth/reset-password"}
          component={RouterLink}
          variant="body2"
          color={"inherit"}
          underline="always"
        >
          Forget Password?
        </Link>
      </Stack>
      <Button
        onClick={() => {}}
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            bgcolor: "text.primary",
          },
        }}
      >
        Submit
      </Button>
    </FormProvider>
  );
}
