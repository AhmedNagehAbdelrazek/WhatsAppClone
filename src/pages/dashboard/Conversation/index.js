import {
  Stack
} from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Messages";

function Conversation() {
  return (
    <Stack sx={{ height: "100%", maxHeight: "100vh", width: "auto" }}>
      <Header />
      <Message/>
      <Footer />
    </Stack>
  );
}

export default Conversation;
