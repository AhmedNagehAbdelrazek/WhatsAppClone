import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "../StyledComponents/StyledBadge";
import { StyledChatBox, stringAvatar } from ".";
import { socket } from "../../Socket";
import { useSelector } from "react-redux";

export default function UserComponent({
  firstName,
  lastName,
  _id,
  online,
  img,
  status
}){
  const theme = useTheme();
  const fullName = `${firstName} ${lastName}`;
  const user_id = window.localStorage.getItem('user_id');
  return (
    <StyledChatBox sx={{ width: "100%" }}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} spacing={1.2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant={status === "Online" ? "dot" : "standard"}
            fullcolor="#0f0"
          >
            <Avatar src={img} {...stringAvatar(firstName,lastName)}/>
          </StyledBadge>
          <Typography variant="subtitle2">{fullName}</Typography>
        </Stack>
        <Button size="large" onClick={()=>{
            if(socket){
                socket.emit("friend_request",{to:_id,from:user_id},()=>{
                    alert("request sent");
                });
            }
        }} >Send Request</Button>
      </Stack>
    </StyledChatBox>
  );
}


