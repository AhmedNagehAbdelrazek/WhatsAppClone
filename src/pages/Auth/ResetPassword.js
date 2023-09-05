import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import { Link as RouterLink } from "react-router-dom"; 
import ResetPasswordForm from "../../Sections/Auth/ResetPasswordForm";


function ResetPassword() {
    return ( <>
        <Stack spacing={2} sx={{mb:5,position:'relative'}}>
            <Typography variant="h3" paragraph>
                Forgot Your Password? 
            </Typography>
            <Typography>
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
            </Typography>

            {/* Reset Password Form */}
            <ResetPasswordForm/>
            {/* return link  */}
            <Link to={"/auth/login"} component={RouterLink} variant="subtitle2" color={"inherit"} underline="always" sx={{mt:3,mx:"auto",alignItems:"center",gap:"5px",display:"inline-flex"}}>
                <CaretLeft />
                Return to Sign in
            </Link>
            


        </Stack>
    </> );
}

export default ResetPassword;