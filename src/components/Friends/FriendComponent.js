import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "../StyledComponents/StyledBadge";
import { StyledChatBox, stringAvatar } from ".";
import { Chat } from "@phosphor-icons/react";
import { socket } from "../../Socket";
import { useDispatch } from "react-redux";
import { INDIVIDUAL, updateRoom } from "../../RTK/Slices/userSlice";

export default function FriendComponent({
  firstName,
  lastName,
  status,
  avatar,
  _id,
  handleClose
}) {
  const theme = useTheme();
  const fullName = `${firstName} ${lastName}`;
  const user_id = window.localStorage.getItem('user_id');
  const dispatch = useDispatch();

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
            variant={status === "Online" ? "dot" : "standard"}
            fullcolor="#0f0"
          >
            <Avatar src={avatar} {...stringAvatar(firstName, lastName)} />
          </StyledBadge>
          <Typography variant="subtitle2">{fullName}</Typography>
        </Stack>
        <IconButton onClick={() => {
          socket.emit("begin_conversation",{from:user_id,to:_id},(data)=>{
            console.log("begin_conversation",data);
            dispatch(updateRoom({roomType:INDIVIDUAL,roomId:data?._id}));
            handleClose();
          })
        }}>
          <Chat/>
        </IconButton>
      </Stack>
    </StyledChatBox>
  );
}
