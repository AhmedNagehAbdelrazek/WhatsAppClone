import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Badge,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  MagnifyingGlass,
  CircleDashed,
  PushPinSimple,
  ChatDots,
  Users,
} from "@phosphor-icons/react";
import { ArchiveBox } from "phosphor-react";
import { SimpleBarStyle } from "../../components/StyledComponents/Scrollbar";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/StyledComponents/Search";
import { ChatElement } from "../../components/Chat/ChatElement";
import Friends from "../../Sections/Main/Friends";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../Socket";
import { fetchDirectConversationChats } from "../../RTK/Slices/userSlice";

export default function Chats() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = React.useState(false);
  const { friendRequests } = useSelector((state) => state.user);
  const user_id = window.localStorage.getItem("user_id");
  const dispatch = useDispatch();
  const conversation = useSelector(
    (state) => state.user.conversations
  );
  console.log("chats",conversation.direct_chat.chats);
  console.log("isLoading",conversation.isLoading);
  console.log("conversation",conversation);


  useEffect(() => {
    if (socket)
      // list of Conversation
      dispatch(fetchDirectConversationChats());
    return () => {
      // if (socket) socket.off("get_direct_conversation");
    };
  }, []);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "30%",
        minWidth: "330px",
        maxWidth: "330px",
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
          <Typography variant="h5">Chats</Typography>
          <Box>
            <Badge
              overlap="circular"
              badgeContent={friendRequests?.length}
              color="primary"
              max={99}
            >
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
              >
                <Users />
              </IconButton>
            </Badge>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Box>
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
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <ArchiveBox size={24} />
            <Button variant="text" color="info">
              Archive
            </Button>
          </Stack>
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
        >
          <SimpleBarStyle
            timeout={500}
            clickOnTrack={false}
            style={{ maxHeight: "100vh" }}
          >
            <Stack spacing={2} px={0.2}>
              {conversation.direct_chat.chats?.reduce((acc, val) => (val.pinned ? acc + 1 : acc), 0) >
                0 && (
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
                    {conversation.direct_chat.chats
                      ?.filter((c) => c.pinned)
                      .map((chat) => {
                        return <ChatElement key={chat.id} chat={chat} />;
                      })}
                  </Stack>
                </Stack>
              )}

              <Stack spacing={2.4}>
                <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                  <ChatDots />
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.mode === "light" ? "#676767" : "#fff"}
                  >
                    All Chats
                  </Typography>
                </Stack>

                <Stack spacing={1.5}>
                  {conversation.direct_chat.chats
                    ?.filter((c) => !c.pinned)
                    .map((chat) => {
                      return <ChatElement key={chat.id} chat={chat} />;
                    })}
                </Stack>
              </Stack>
              {conversation.isLoading ? <Stack sx={{width:"100%"}} alignItems={"center"}><CircularProgress /></Stack>: <></> }
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </Box>
  );
}
