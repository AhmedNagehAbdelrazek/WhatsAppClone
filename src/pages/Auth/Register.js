import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../Sections/Auth/RegisterForm";
import AuthSocial from "../../Sections/Auth/AuthSocial";
function Register() {
  return (
    <>
      <Stack spacing={2} sx={{ mt: 5, position: "relative" }}>
        <Typography variant="h4">Get Started With WhatsApp Clone</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body1">Already Have an account?</Typography>
          <Link to={"/auth/login"} component={RouterLink} variant="body1">
            Sign in
          </Link>
        </Stack>
        {/* Register Form */}
            <RegisterForm />
        {/* terms of services */}
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By singing up, i agree to "}
          <Link to={"#"} color="text.primary" underline="always">
            Terms of services
          </Link>
          {" and "}
          <Link to={"#"} color="text.primary" underline="always">
            Privacy policy 
          </Link>
        </Typography>
        <AuthSocial/>
      </Stack>
    </>
  );
}

export default Register;
