import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/WhatsAppClone.png";

const MainLayout = () => {
  return (
    <>
      <Container sx={{ pt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          {/* logo */}
          <Stack sx={{ width: "100%" }} alignItems={"center"}>
            <img style={{ width: "65px" }} src={Logo} alt={"Logo"} />
          </Stack>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
