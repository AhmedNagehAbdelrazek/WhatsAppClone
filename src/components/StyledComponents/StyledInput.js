import styled from "@emotion/styled";
import { TextField } from "@mui/material";


export const StyledInput = styled(TextField)(({theme})=>({

    "& .MuiInputBase-input" : {
        paddingTop: "12px",
        paddingBottom: "12px",
    },
    '& .MuiInputBase-root' :{
        padding: "3px 8px",
        alignItems:"flex-end",
        borderRadius:'10px',
    },
    '& MuiInputAdornment-root':{
        maxHeight:"none",
        height:"100%"
    }
})) ;