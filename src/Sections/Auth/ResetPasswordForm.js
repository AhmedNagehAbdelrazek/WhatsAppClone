import { useState } from "react";
import FormProvider from "../../hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../hook-form/RHFTextField";
import { Alert, Button, Stack } from "@mui/material";

export default function ResetPasswordForm() {
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

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="email" label="Email Address" />
      </Stack>

      <Stack alignItems={"end"} sx={{ my: 2 }}>
        <Button
          onClick={() => {}}
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
          Send request
        </Button>
      </Stack>
    </FormProvider>
  );
}
