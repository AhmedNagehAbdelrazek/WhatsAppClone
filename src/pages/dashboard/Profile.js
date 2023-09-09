import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Article,
  CaretLeft,
  ClipboardText,
  Image,
  Key,
  Lock,
  PencilCircle,
  WarningCircle,
} from "@phosphor-icons/react";
import { faker } from "@faker-js/faker";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { NotificationsNone } from "@mui/icons-material";
import Shortcuts from "../../Sections/Settings/Shortcuts";
import { useState } from "react";
import ProfileForm from "../../Sections/Settings/ProfileForm";
import NoChat from "../../assets/Illustration/NoChat";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Stack direction="row" sx={{ width: "100%", height: "100vh" }}>
      {/* Settings Menu */}
      <Box
        p={3}
        sx={{
          width: "25%",
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
      <Box sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{ height: "100%" , width:"100%" }}  alignItems={"end"}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ height: "100%", width:"100%" }}
          >
            <NoChat />
          </Stack>
          <Box
            sx={{
              width: "99%",
              height: "10px",
              bgcolor: "#5b96f7",
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px",
              paddingLeft:"10px"
            }}
          />
        </Stack>
      </Box>
    </Stack>
  );
}
