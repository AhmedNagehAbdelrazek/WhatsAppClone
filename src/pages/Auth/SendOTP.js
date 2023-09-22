import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import { Link as RouterLink } from "react-router-dom"; 
import SendOTPForm from "../../Sections/Auth/SendOTPForm";


function SendOTP() {
    return ( <>
        <Stack spacing={2} sx={{mb:5,position:'relative'}}>
            <Typography variant="h3" paragraph>
                Type the Code Been Sent To you Email
            </Typography>
            <Typography>
                The code has a 10 min Expire Date 
            </Typography>

            {/* Reset Password Form */}
            <SendOTPForm />
            {/* return link  */}
            <Link to={"/auth/login"} component={RouterLink} variant="subtitle2" color={"inherit"} underline="always" sx={{mt:3,mx:"auto",alignItems:"center",gap:"5px",display:"inline-flex",width:"fit-content"}}>
                <CaretLeft />
                Return to Login
            </Link>
        </Stack>
    </> );
}

export default SendOTP;