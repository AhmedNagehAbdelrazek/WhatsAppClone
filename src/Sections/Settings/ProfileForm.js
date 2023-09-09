import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { Alert, Button, Stack } from "@mui/material";
import { useCallback, useEffect } from "react";

export default function ProfileForm() {
  const loginSchema = Yup.object().shape({
    avatarUrl:Yup.string().nullable(true),
    name: Yup.string().required("Name is Required"),
    about: Yup.string().notRequired(),
  });

  const defaultValues = {
    avatarUrl:"",
    name: "Ahmed",
    about: "The Best",
  };

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    watch,
    control,
    setValue,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = methods;


  useEffect(() => {
    reset();

  }, [isSubmitSuccessful]);

  const values = watch();

  const handleDrop = useCallback((acceptedFiles)=>{
    const file = acceptedFiles[0];

    const newFile = Object.assign(file,{
      preview:URL.createObjectURL(file)
    })

    if(file){
      setValue("avatarUrl",newFile,{shouldValidate:true});
    }

  },[setValue])

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
        {!!errors.name && (
          <Alert severity="error">Name: {errors.name.message}</Alert>
        )}
        {!!errors.about && (
          <Alert severity="error">About: {errors.about.message}</Alert>
        )}

        <RHFTextField
          name="name"
          label="Name"
          helperText={"This name is visible to your contact"}
        />
        <RHFTextField
          name="about"
          label="About"
          sx={{ "& .MuiInputBase-root": { paddingTop: 3 } }}
          multiline
          minRows={3}
          maxRows={8}
        />
      </Stack>
      <Stack alignItems={"end"} sx={{ my: 2 }}>
        <Button
          onClick={() => {}}
          size="large"
          type="submit"
          variant="outlined"
        >
          Save
        </Button>
      </Stack>
    </FormProvider>
  );
}
