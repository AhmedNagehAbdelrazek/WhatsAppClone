import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import { Link as RouterLink } from "react-router-dom";
import NewPasswordForm from "../../Sections/Auth/NewPasswordForm";

export default function NewPassword() {
  return (
    <>
      <Stack spacing={2} sx={{ mt: 5, position: "relative" }}>
        <Typography variant="h5">Reset Password</Typography>
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          Please set your new password
        </Typography>

        {/* NewPasswordForm */}
          <NewPasswordForm/>

        <Link to={"/auth/login"} component={RouterLink} variant="subtitle2" color={"inherit"} underline="always" sx={{mt:3,mx:"auto",alignItems:"center",gap:"5px",display:"inline-flex"}}>
                <CaretLeft />
                Return to Sign in
            </Link>
      </Stack>
    </>
  );
}
