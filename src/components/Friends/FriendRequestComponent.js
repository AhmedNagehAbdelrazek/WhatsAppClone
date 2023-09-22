import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "../StyledComponents/StyledBadge";
import { StyledChatBox, stringAvatar } from ".";
import { socket } from "../../Socket";

export default function FriendRequestComponent({
  _id,
  sender
}) {
  const theme = useTheme();
  const fullName = `${sender.firstName} ${sender.lastName}`;
  const user_id = window.localStorage.getItem('user_id');
  return (
    <StyledChatBox sx={{ width: "100%" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1.2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant={sender?.online ? "dot" : "standard"}
            fullcolor="#0f0"
          >
            <Avatar src={sender?.img} {...stringAvatar(sender.firstName, sender.lastName)} />
          </StyledBadge>
          <Typography variant="subtitle2">{fullName}</Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Button color="success" onClick={() => {
            if(socket){
                socket.emit("accept_request",{request_id:_id},(data)=>{
                    alert("request sent");
                });
            }
          }}>
            Accept
          </Button>
          <Button color="error" onClick={() => {}}>
            Refuse
          </Button>
        </Stack>
      </Stack>
    </StyledChatBox>
  );
}
