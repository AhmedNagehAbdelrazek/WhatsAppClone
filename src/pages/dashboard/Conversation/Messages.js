import { Box, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Chat_History } from "../../../data";
import { ChatMessages } from "../../../components/ChatMessages";
import { SimpleBarStyle } from "../../../components/Scrollbar";


function Message() {
  const theme = useTheme();
  return (
    <SimpleBarStyle>
      <Box
        sx={{
          flexGrow: "1",
          width: "100%",
          height: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f0f4fa"
              : theme.palette.background.default,
          overflow: "auto",
        }}
      >
        <Box p={2} sx={{ width: "100%", height: "100%" }}>
          <Stack direction={"column"} spacing={3}>
            {Chat_History.map((chatH) => (
              <ChatMessages key={chatH.id} chatH={chatH} />
            ))}
          </Stack>
        </Box>
      </Box>
    </SimpleBarStyle>
  );
}

export default Message;
