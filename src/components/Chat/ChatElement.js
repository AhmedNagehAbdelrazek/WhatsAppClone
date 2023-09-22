import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "../StyledComponents/StyledBadge";
import { useDispatch } from "react-redux";
import { INDIVIDUAL, updateRoom } from "../../RTK/Slices/userSlice";
import { stringAvatar } from "../Friends";

export const ChatElement = ({ chat }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      onClick={() => {
        dispatch(updateRoom({ roomId: chat.id, roomType: INDIVIDUAL }));
      }}
      sx={{
        cursor: "pointer",
        width: "100%",

        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f1f5ff"
              : "#242E3C",
          boxShadow: theme.palette.mode === "light"
          ? theme.shadows[5]
          : "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.2),0px 1px 14px 0px rgba(0, 0, 0, 0.2)",
        },
        transition: "all 220ms",
        mx: 1,
      }}
      p={1}
    >
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant={chat.online ? "dot" : "standard"}
          >
            <Avatar src={chat.img} {...stringAvatar(chat.firstName,chat.lastName)} />
          </StyledBadge>
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{`${chat.firstName} ${chat.lastName}`}</Typography>
            <Typography
              variant="caption"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "130px",
              }}
            >
              {chat.msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"column"} spacing={2} alignItems={"center"}>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {chat.time}
          </Typography>
          <Badge
            color="info"
            badgeContent={chat.unread}
            invisible={chat.unread > 0 ? false : true}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
