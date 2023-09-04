import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../Sections/Auth/AuthSocial";
import LoginForm from "../../Sections/Auth/LoginForm";

function Login() {
  return (
    <>
      <Stack spacing={2} sx={{ mt: 5, position: "relative" }}>
        <Typography variant="h5">Login To WhatsAppClone</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">New User?</Typography>
          <Link to={"/auth/register"} component={RouterLink} variant="body2">
            Create an Account
          </Link>
        </Stack>
        {/* login form */}
        <LoginForm/>
        {/* Auth Social */}
        <AuthSocial/>
      </Stack>
    </>
  );
}

export default Login;
