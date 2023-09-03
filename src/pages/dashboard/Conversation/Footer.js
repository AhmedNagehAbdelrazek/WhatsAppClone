import {
  Box,
  Fab,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { StyledInput } from "../../../components/StyledComponents/StyledInput";
import {
  Camera,
  File,
  Image,
  Link,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "@phosphor-icons/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

function Footer() {
  const theme = useTheme();
  const [openPickup, setOpenPickup] = useState(false);
  const [openActions, setOpenActions] = useState(false);
  return (
    <>
      <Stack sx={{ position: "relative" }}>
        {Actions.map((data) => (
          <Tooltip key={data.y} title={data.title} placement="right">
            <Fab
              className={openActions ? "" : "hideActions"}
              sx={{
                zIndex: "2",
                position: "absolute",
                left:"15px",
                top: -data.y,
                transition: "top 500ms",
                backgroundColor: data.color,
              }}
              color="primary"
              aria-label="add"
            >
              {data.icon}
            </Fab>
          </Tooltip>
        ))}
      </Stack>
      <Box
        p={2}
        sx={{
          zIndex: "3",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background.paper,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"flex-end"}
          spacing={3}
          justifyItems={"center"}
        >
          <Stack sx={{ width: "100%" }}>
            {/* Chat Input  */}
            <Box
              sx={{
                display: openPickup ? "inline" : "none",
                position: "fixed",
                bottom: "80px",
                right: "85px",
                zIndex: "10",
              }}
            >
              <Picker
                emojiButtonSize={50}
                emojiSize={36}
                perLine={8}
                navPosition="top"
                theme={theme.palette.mode}
                data={data}
                onEmojiSelect={(emoji) => {}}
              />
            </Box>
            <ChatInput setOpenPickup={setOpenPickup} setOpenActions={setOpenActions} />
          </Stack>
          <Box
            sx={{
              height: "48px",
              aspectRatio: "1",
              borderRadius: 1.5,
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ width: "100%", height: "100%" }}
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Footer;

function ChatInput({ setOpenPickup ,setOpenActions}) {
  
  return (
    <>
      <StyledInput
        multiline
        maxRows={4}
        placeholder="Type a Message"
        fullWidth
        variant="filled"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <Stack sx={{ width: "max-content", height: "100%" }}>
              <IconButton onClick={() => setOpenActions((state) => !state)}>
                <Link />
              </IconButton>
            </Stack>
          ),
          endAdornment: (
            <IconButton onClick={() => setOpenPickup((state) => !state)}>
              <Smiley />
            </IconButton>
          ),
        }}
      />
    </>
  );
}

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];
