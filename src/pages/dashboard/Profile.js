import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  CaretLeft,
} from "@phosphor-icons/react";
import { faker } from "@faker-js/faker";
import ProfileForm from "../../Sections/Settings/ProfileForm";
import { useNavigate } from "react-router-dom";
import SelectAConversationSide from './../Extra/SelectAConverstionSide';
import { GetUserData } from "../../RTK/Slices/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Profile() {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetUserData());
  },[]);
  return (
    <Stack direction="row" sx={{ width: "100%", height: "100vh" }}>
      {/* Settings Menu */}
      <Box
        p={3}
        sx={{
          width: "25%",
          minWidth:"380px",
          maxWidth: "380px",
          height: "100vh",
          boxShadow: `0px 0px 6px ${
            theme.palette.mode === "light"
              ? "rgba(0,0,0,0.24)"
              : "rgba(255, 255, 255, 0.24)"
          } ,inset 2px 2px 5px ${
            theme.palette.mode === "light"
              ? "rgba(200,200,200,0.5)"
              : "rgba(10, 10, 10,0.5)"
          }`,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background,
          overflowY: "hidden",
        }}
      >
        <Stack spacing={1} sx={{ height: "100%" }}>
          {/* nav */}
          <Stack direction={"row"} spacing={2}>
            <IconButton onClick={() => navigate(-1)}>
              <CaretLeft size={30} />
            </IconButton>
            <Typography variant="h3">Profile</Typography>
          </Stack>
          {/* account info */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={3}
            justifyContent={"center"}
            p={2}
          >
            <Avatar
              sx={{ width: "110px", height: "110px" }}
              src={faker.image.avatar()}
            />
          </Stack>
          {/* Settings Options */}
          <Stack divider={<Divider orientation="horizontal" flexItem />}>
            <ProfileForm />
          </Stack>
        </Stack>
      </Box>
      {/* right Panel */}
      <SelectAConversationSide />
    </Stack>
  );
}
