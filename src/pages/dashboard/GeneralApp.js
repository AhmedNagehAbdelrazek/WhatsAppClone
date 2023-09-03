import { Box, Stack } from "@mui/material";
import React from "react";
import Chats from "./Chats";
import Conversation from "./Conversation";
import { Contact } from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import { CONTACT, SHARED, STARRED } from "../../RTK/Slices/appSlice";
import { StarredMessages } from "../../components/StarredMessages";
const GeneralApp = () => {
  const app = useSelector((state) => state.app);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{ flexGrow: "1", transition: "all 500ms", backgroundColor: "#fff" }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
      {/* Contact */}
      {app.sideBar.open &&
        (() => {
          switch (app.sideBar.type) {
            case CONTACT:
              return <Contact />;
            case STARRED:
              return <StarredMessages/>;
            case SHARED:
              return <SharedMessages />;
            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
