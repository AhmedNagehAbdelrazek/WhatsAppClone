import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "./StyledComponents/StyledBadge";
import {
  ArrowDownLeft,
  ArrowUpRight,
  PhoneIncoming,
  PhoneOutgoing,
  VideoCamera,
} from "@phosphor-icons/react";

export const CallElement = ({ call }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
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
            variant={call.online ? "dot" : "standard"}
          >
            <Avatar src={call.img} />
          </StyledBadge>
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{call.name}</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              {call.callDestination === "outcome" && (
                <ArrowUpRight color={call.missed ? "red" : "green"} />
              )}
              {call.callDestination === "income" && (
                <ArrowDownLeft color={call.missed ? "red" : "green"} />
              )}
              <Typography variant="caption">{call.time}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"column"} spacing={2} alignItems={"center"}>
          <IconButton>
            {call.callType === "call" && call.callDestination === "outcome" && <PhoneOutgoing color={call.missed ? "red" : "green"} />}
            {call.callType === "call" && call.callDestination === "income"  && <PhoneIncoming color={call.missed ? "red" : "green"} />}
            {call.callType === "video" && <VideoCamera color={call.missed ? "red" : "green"} />}
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};
