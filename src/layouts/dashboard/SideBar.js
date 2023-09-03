import {
  Box,
  Divider,
  IconButton,
  Stack,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Logo } from "../../assets/Images/Logo";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "@phosphor-icons/react";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";
import { IOSSwitch } from "../../components/IOSSwitch";
import useSettings from "../../hooks/useSettings";
import { Link, Navigate } from "react-router-dom";

export function SideBar() {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={2}
      sx={{
        height: "100vh",
        width: "10%",
        maxWidth: "100px",
        overflowY: "auto",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
      className="RemoveScroll"
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        sx={{ width: "100%", height: "100%" }}
        spacing={3}
        justifyContent={"space-between"}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Link to={"/app"} onClick={()=>setSelected(0)}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <Stack
                sx={{ width: "100%", height: "100%" }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {/* <img src={Logo} alt="Logo"/> */}
                <Logo color={theme.palette.primary.light} size={42} />
              </Stack>
            </Box>
          </Link>

          <Stack
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
            spacing={2}
          >
            {Nav_Buttons.map((btn) =>
              btn.index === selected ? (
                <Box
                  key={btn.index}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "12px",
                  }}
                >
                  <IconButton
                    sx={{ color: "#fff", width: "max-content" }}
                    // onClick={() => setSelected(btn.index)}
                  >
                    {btn.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(btn.index)}
                  key={btn.index}
                  sx={{
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  {btn.icon}
                </IconButton>
              )
            )}
            <Divider flexItem orientation="horizontal" />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "12px",
                }}
              >
                <IconButton
                  sx={{ color: "#fff", width: "max-content" }}
                  // onClick={() => setSelected(3)}
                >
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <Link to={"/settings"}>
                <IconButton
                  onClick={() => {
                    setSelected(3);
                    NavigateTo("/settings");
                  }}
                  sx={{
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear />
                </IconButton>
              </Link>
            )}
          </Stack>
        </Stack>

        <Stack justifyContent={"flex-end"} alignContent={"center"} spacing={4}>
          <IOSSwitch
            onClick={(e) => {
              onToggleMode();
            }}
            defaultChecked={theme.palette.mode === "dark"}
          />
          <Avatar
            id={`option-btn`}
            onClick={handleClick}
            src={faker.image.avatar()}
          />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": `option-btn`,
            }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            transformOrigin={{ horizontal: "left", vertical: "bottom" }}
          >
            <Stack spacing={1}>
              {Profile_Menu.map((title) => (
                <MenuItem key={title.title} onClick={handleClose}>
                  <Stack
                    sx={{ width: 100 }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    {title.title}
                    {title.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
}

function NavigateTo(path) {
  return <Navigate to={path} replace />;
}
