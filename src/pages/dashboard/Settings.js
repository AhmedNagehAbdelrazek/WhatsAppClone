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
import { Navigate, useNavigate } from "react-router-dom";
import { AvatarStyled } from "../../components/StyledComponents/AvatarStyled";

export default function Settings() {
  const theme = useTheme();
  const [openShortcuts, setOpenShortcuts] = useState(false);
  const navigate = useNavigate();

  const SettingsOptions = [
    {
      icon: <NotificationsNone />,
      text: "Notification",
      navigate: "notification",
      onclick: () => {},
    },
    {
      icon: <Lock />,
      text: "Privacy",
      navigate: "Privacy",
      onclick: () => {},
    },
    {
      icon: <Key />,
      text: "Security",
      navigate: "Security",
      onclick: () => {},
    },
    {
      icon: <PencilCircle />,
      text: "Theme",
      navigate: "Theme",
      onclick: () => {},
    },
    {
      icon: <Image />,
      text: "Chat WallPaper",
      navigate: "Chat WallPaper",
      onclick: () => {},
    },
    {
      icon: <ClipboardText />,
      text: "Request Account Info",
      navigate: "Request Account Info",
      onclick: () => {},
    },
    {
      icon: <Article />,
      text: "KeyBoard Shortcuts",
      navigate: "KeyBoard Shortcuts",
      onclick: () => {
        setOpenShortcuts(true);
      },
    },
    {
      icon: <WarningCircle />,
      text: "Help",
      navigate: "Help",
      onclick: () => {},
    },
  ];

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
            <IconButton onClick={()=> navigate(-1) }>
              <CaretLeft size={30} />
            </IconButton>
            <Typography variant="h3">Settings</Typography>
          </Stack>
          {/* account info */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={3}
            justifyContent={"start"}
            p={2}
          >
            <AvatarStyled
              sx={{ width: "75px", height: "75px" ,cursor:'pointer'}}
              src={faker.image.avatar()}
              // onClick={()=>{<Navigate to={"/profile"} />}}
            />
            <Stack direction={"column"}>
              <Typography variant="article" fontWeight={500}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {faker.phone.number()}
              </Typography>
            </Stack>
          </Stack>
          <SimpleBarStyle>
            {/* Settings Options */}
            <Stack divider={<Divider orientation="horizontal" flexItem />}>
              {SettingsOptions.map((option) => {
                return (
                  <Button
                    onClick={option.onclick}
                    fullWidth
                    key={option.navigate}
                    sx={{
                      justifyContent: "flex-start",
                      padding: "20px 0px 10px 20px",
                    }}
                    startIcon={option.icon}
                    color={"inherit"}
                  >
                    {option.text}
                  </Button>
                );
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Box>
      {/* right Panel */}
      {
        <Shortcuts
          open={openShortcuts}
          handleClose={() => {
            setOpenShortcuts(false);
          }}
        />
      }
    </Stack>
  );
}
