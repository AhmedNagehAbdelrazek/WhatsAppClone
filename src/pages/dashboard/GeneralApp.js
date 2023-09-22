import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Chats from "./Chats";
import Conversation from "./Conversation";
import { Contact } from "../../components/Contact";
import { useDispatch, useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import { CONTACT, SHARED, STARRED, resetSideBar } from "../../RTK/Slices/appSlice";
import { StarredMessages } from "../../components/StarredMessages";
import SelectAConversationSide from "../Extra/SelectAConverstionSide";
import { INDIVIDUAL } from "../../RTK/Slices/userSlice";


const GeneralApp = () => {
  const app = useSelector((state) => state.app);
  const {roomId,roomType} = useSelector((state) =>state.user);

  const dispatch = useDispatch();
  useEffect(() => {

    return () => {
      dispatch(resetSideBar());
    };
  },[]);
  
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{ flexGrow: "1", transition: "all 500ms" }}
      >
        {/* Conversation */}
        {roomId && roomType === INDIVIDUAL ? <Conversation /> : <SelectAConversationSide />}
        {/* <Conversation /> */}
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
