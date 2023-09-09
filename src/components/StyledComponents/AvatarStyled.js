import styled from "@emotion/styled";
import { Avatar, alpha } from "@mui/material";

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width:"100px",
    height:"100px",
    
  },
  "&:hover": {
    "&::before": {
      backgroundColor: alpha("#000",0.18),
    },
  },
}));
