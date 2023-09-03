import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "./StyledComponents/StyledBadge";

export const ChatElement = ({ chat }) => {
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
              variant={chat.online ? "dot" : "standard"}
            >
              <Avatar src={chat.img} />
            </StyledBadge>
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{chat.name}</Typography>
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