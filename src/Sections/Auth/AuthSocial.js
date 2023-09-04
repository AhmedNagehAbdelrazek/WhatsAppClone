import { Divider, IconButton, Stack} from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "@phosphor-icons/react";



function AuthSocial() {
    return ( <>
    <Stack>
        <Divider sx={{my:2.5,typography:"overline",'&::before ,::after':{
            borderTopStyle:"dashed"
        }}}>
            OR
        </Divider>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={2}>
            <IconButton>
                <GoogleLogo color="#df3e30"/>
            </IconButton>
            <IconButton>
                <GithubLogo color="inherit"/>
            </IconButton><IconButton>
                <TwitterLogo color="#1c9cea"/>
            </IconButton>
        </Stack>
    </Stack>
    </> );
}

export default AuthSocial;




