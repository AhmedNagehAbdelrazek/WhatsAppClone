import { Box, IconButton, Stack, Typography } from "@mui/material";
import { SimpleBarStyle } from "./Scrollbar";
import { ArrowLeft } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { CONTACT, updateSidebarType } from "../RTK/Slices/appSlice";
import { useTheme } from "@mui/material/styles";
import { Chat_History } from "../data";
import { ChatMessages } from "./ChatMessages";

export function StarredMessages() {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "20%",
          maxWidth: "320px",
          height: "100vh",
          borderLeft: `2px solid ${
            theme.palette.mode === "light"
              ? "rgba(0,0,0,0.24)"
              : "rgba(145, 158, 171, 0.24)"
          }`,
        }}
      >
        <SimpleBarStyle>
          <Stack
            p={3}
            sx={{
              boxShadow: `0px 0px 2px ${
                theme.palette.mode === "light"
                  ? "rgba(0,0,0,0.24)"
                  : "rgba(145, 158, 171, 0.24)"
              }`,
            }}
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            justifyContent={"start"}
          >
            <IconButton
              onClick={() => dispatch(updateSidebarType({ type: CONTACT }))}
            >
              <ArrowLeft size={24} />
            </IconButton>
            <Typography variant="subtitle1">Starred Messages</Typography>
          </Stack>
          <Stack direction={"column"} spacing={3} px={1}>
            {Chat_History.filter((f) => 
              f.starred
              ).map((el) => {
                console.log(el);
                return <ChatMessages showOptions={false} chatH={el} />
            }
            )}
          </Stack>
        </SimpleBarStyle>
      </Box>
    </>
  );
}
