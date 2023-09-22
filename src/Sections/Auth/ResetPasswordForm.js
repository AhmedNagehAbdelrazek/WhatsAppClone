import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { Alert, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { ForgotPasswordUser } from "../../RTK/Slices/authSlice";
import FormBtn from "../../components/FormBtn";

export default function ResetPasswordForm() {
  const dispatch = useDispatch();
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Email must be a valid email address "),
  });

  const defaultValues = {
    email: "demo@chat.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
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
      dispatch(ForgotPasswordUser(data));
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
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        {!!errors.email && (<Alert severity="error" >Email: {errors.email.message}</Alert> )}

        <RHFTextField name="email" label="Email Address" />
      </Stack>

      <Stack alignItems={"end"} sx={{ my: 2 }}>
        <FormBtn value="Send request" fullWidth={false}/>
      </Stack>
    </FormProvider>
  );
}
