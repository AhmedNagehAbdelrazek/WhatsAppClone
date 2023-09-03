import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  CaretDown,
  MagnifyingGlass,
  Phone,
  VideoCamera,
} from "@phosphor-icons/react";
import { StyledBadge } from "../../../components/StyledComponents/StyledBadge";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";
import { toggleSideBar } from "../../../RTK/Slices/appSlice";
import { useDispatch } from "react-redux";

function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      p={2}
      px={3}
      sx={{
        width: "100%",
        backgroundColor: theme.palette.mode === "light"
        ? "#f8faff"
        : theme.palette.background.paper ,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.6)",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack onClick={()=>dispatch(toggleSideBar())} sx={{cursor:"pointer"}} direction={"row"} spacing={2} alignItems={"center"}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            fullcolor="#0f0"
          >
            <Avatar src={faker.image.avatar()} />
          </StyledBadge>
          <Stack direction={"column"}>
            <Typography
              variant="h4"
              color={
                theme.palette.mode === "light"
                  ? "#000"
                  : "#fff"
              }
            >
              {faker.name.fullName()}
            </Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton >
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
