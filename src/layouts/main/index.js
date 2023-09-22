import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/WhatsAppClone.png";
import { useSelector } from "react-redux";

const MainLayout = () => {

  const isLogged = useSelector((state)=>state.auth.isLoggedIn);
  if(isLogged){
    return <Navigate to={"/app"}/>
  }
  return (
    <>
      <Container sx={{ pt: 5 ,height:"100%"}} maxWidth="sm">
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
