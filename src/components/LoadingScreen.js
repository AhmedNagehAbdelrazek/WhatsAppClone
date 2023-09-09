import React from "react";
import "../CSS/Loading.css";
import { Box, CircularProgress, Stack } from "@mui/material";

const LoadingScreen = () => {
  return (
    <>
    <Stack sx={{width:"100%" ,height:"100%"}} alignItems={"center"} justifyContent={"center"}>
      <Box sx={{width:"65px", height:"65px"}}>
        <CircularProgress/>
      </Box>
    </Stack>
    </>
  );
};

export default LoadingScreen;
