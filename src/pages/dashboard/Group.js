import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,

  Divider,

  Stack,
  Typography,
} from "@mui/material";
import {
  MagnifyingGlass,
  PushPinSimple,
  ChatDots,
  Plus,
} from "@phosphor-icons/react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/StyledComponents/Search";
import { ChatElement } from "../../components/ChatElement";
import CreateGroup from "../../Sections/Main/CreateGroup";



export default function Group() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <Stack sx={{width:"100%"}}>
        {/* Left Side */}
      <Box
        sx={{
          position: "relative",
          width: "30%",
          maxWidth: "320px",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#eaeef9"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={3.5} pb={0} spacing={2} sx={{ height: "100vh" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Groups</Typography>
          </Stack>
          <Search
            sx={{
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#CBE0FF"
                  : theme.palette.text.disabled,
            }}
          >
            <SearchIconWrapper>
              <MagnifyingGlass color=""></MagnifyingGlass>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: theme.palette.text.primary,
                  opacity: "0.7",
                },
              }}
            />
          </Search>
          <Stack spacing={0.5}>
            <Button
              endIcon={<Plus />}
              onClick={() => handleClickOpen()}
              sx={{
                typography: "body2",
                justifyContent: "space-between",
                px: 2,
              }}
              size="large"
            >
              Create New Group
            </Button>
            
            <Divider orientation="horizontal" flexItem />
          </Stack>

          <Stack
            spacing={2}
            direction={"column"}
            sx={{
              flexGrow: 1,
              overflow: "auto",
              height: "100%",
            }}
            className="removeScroll"
          >
            <SimpleBarStyle
              timeout={500}
              clickOnTrack={false}
              style={{ maxHeight: "100%" }}
            >
              <Stack spacing={2}>
                <Stack spacing={2.4}>
                  <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                    <PushPinSimple />
                    <Typography
                      variant="subtitle2"
                      color={
                        theme.palette.mode === "light" ? "#676767" : "#fff"
                      }
                    >
                      Pinned
                    </Typography>
                  </Stack>

                  <Stack spacing={1.5}>
                    {ChatList.filter((c) => c.pinned).map((chat) => {
                      return <ChatElement key={chat.id} chat={chat} />;
                    })}
                  </Stack>
                </Stack>
                <Stack spacing={2.4}>
                  <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                    <ChatDots />
                    <Typography
                      variant="subtitle2"
                      color={
                        theme.palette.mode === "light" ? "#676767" : "#fff"
                      }
                    >
                      All Chats
                    </Typography>
                  </Stack>

                  <Stack spacing={1.5}>
                    {ChatList.filter((c) => !c.pinned).map((chat) => {
                      return <ChatElement key={chat.id} chat={chat} />;
                    })}
                  </Stack>
                </Stack>
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
        <CreateGroup open={open} handleClose={handleClose}/>
      </Box>
      
      {/* Right Side */}
      {/* //TODO => Reuse Conversation Components */}

    </Stack>
  );
}