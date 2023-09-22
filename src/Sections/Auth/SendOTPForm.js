import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {VerifyOTP } from "../../RTK/Slices/authSlice";
import RHFCodes from "../../components/hook-form/RHFCodes";
import FormBtn from "../../components/FormBtn";

export default function SendOTPForm() {
  const dispatch = useDispatch();
  const {email} = useSelector((state)=>state.auth);
  
  const ResetPasswordSchema = Yup.object().shape({
    code1: Yup.string().required("code1 is Required"),
    code2: Yup.string().required("code2 is Required"),
    code3: Yup.string().required("code3 is Required"),
    code4: Yup.string().required("code4 is Required"),
    code5: Yup.string().required("code5 is Required"),
    code6: Yup.string().required("code6 is Required"),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: ''   
  };

  const methods = useForm({
    mode:"onChange",
    resolver: yupResolver(ResetPasswordSchema),
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
      const otp = data.code1+data.code2+data.code3+data.code4+data.code5+data.code6;
    //   console.log(otp);
      dispatch(VerifyOTP({otp,email}));
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

        {(!!errors?.code1 || !!errors?.code2 || !!errors?.code3 || !!errors?.code4 || !!errors?.code5 || !!errors?.code6 ) && (
          <Alert severity="error">{errors?.code1?.message || errors?.code2?.message ||errors?.code3?.message ||errors?.code4?.message ||errors?.code5?.message ||errors?.code6?.message }</Alert>
        )}

        <RHFCodes
          keyName="code"
          inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}
        />
      </Stack>

      <Stack alignItems={"end"} sx={{ my: 2 }}>
        <FormBtn value="Send" fullWidth={false}/>
      </Stack>
    </FormProvider>
  );
}
