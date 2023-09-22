import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  DotsThreeVertical,
  DownloadSimple,
  Image,
} from "@phosphor-icons/react";
import { Message_options } from "../../data";

export function TimeLine({showOptions, chatH }) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider sx={{ width: "46%" }} orientation="horizontal" flexItem />
      <Typography variant="caption">{chatH.text}</Typography>
      <Divider sx={{ width: "46%" }} orientation="horizontal" flexItem />
    </Stack>
  );
}

export function TextMessage({showOptions, chatH }) {
  const theme = useTheme();
  return (
    <StackWrapper showOptions={showOptions} chatH={chatH}>
      <Typography
        variant="body2"
        color={
          chatH.incoming
            ? theme.palette.mode === "dark"
              ? "#fff"
              : "#000"
            : "#fff"
        }
      >
        {chatH.message}
      </Typography>
    </StackWrapper>
  );
}
export function MediaMessage({showOptions, chatH }) {
  const theme = useTheme();
  return (
    <StackWrapper showOptions={showOptions} chatH={chatH} p={0.5}>
      <Stack spacing={1.5}>
        <img
          src={chatH.img}
          alt={chatH.message}
          style={{ maxHeight: 210, borderRadius: "10px" }}
        />
        <Typography
          variant="body2"
          color={
            chatH.incoming
              ? theme.palette.mode === "dark"
                ? "#fff"
                : "#000"
              : "#fff"
          }
        >
          {chatH.message}
        </Typography>
      </Stack>
    </StackWrapper>
  );
}

export function ReplyMessage({showOptions, chatH }) {
  const theme = useTheme();
  return (
    <StackWrapper showOptions={showOptions} chatH={chatH} p={0.5}>
      <Stack spacing={1}>
        <Stack
          p={2}
          direction={"column"}
          spacing={3}
          alignItems={"center"}
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" color={"#000"}>
            {chatH.message}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          color={
            chatH.incoming
              ? theme.palette.mode === "dark"
                ? "#fff"
                : "#000"
              : "#fff"
          }
        >
          {chatH.reply}
        </Typography>
      </Stack>
    </StackWrapper>
  );
}

export function LinkMessage({showOptions, chatH }) {
  const theme = useTheme();
  return (
    <StackWrapper showOptions={showOptions} chatH={chatH} p={0.5}>
      <Stack spacing={2}>
        <Stack
          p={0}
          spacing={3}
          alignItems={"center"}
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
          }}
        >
          <img
            src={chatH.preview}
            alt={chatH.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Stack>
            <Typography
              variant="subtitle2"
              color={
                chatH.incoming
                  ? theme.palette.mode === "dark"
                    ? "#fff"
                    : "#000"
                  : "#fff"
              }
              component={Link}
              to="//https://www.google.com//"
            >
              {chatH.message}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </StackWrapper>
  );
}
export function DocMessage({showOptions, chatH }) {
  const theme = useTheme();
  return (
    <StackWrapper showOptions={showOptions} chatH={chatH}>
      <Stack spacing={2}>
        <Stack
          p={2}
          spacing={3}
          direction={"row"}
          alignItems={"center"}
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
          }}
        >
          <Image size={48} />
          <Typography variant="caption">Abstract.png</Typography>
          <IconButton>
            <DownloadSimple />
          </IconButton>
        </Stack>
        <Typography
          variant="body2"
          color={
            chatH.incoming
              ? theme.palette.mode === "dark"
                ? "#fff"
                : "#000"
              : "#fff"
          }
        >
          {chatH.message}
        </Typography>
      </Stack>
    </StackWrapper>
  );
}

function StackWrapper({showOptions, children, chatH, p }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={chatH.incoming ? "flex-start" : "flex-end"}
    >
      {!chatH.incoming && showOptions && (
        <DotsThreeVertical
          id={`option-btn-${chatH.id}`}
          className={
            theme.palette.mode === "dark" ? "threeDotWhite" : "threeDotBlack"
          }
          onClick={handleClick}
          size={20}
        />
      )}
      <Box
        p={p !== undefined ? p : 1}
        sx={{
          width: "max-content",
          backgroundColor: chatH.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.4)",
        }}
      >
        {children}
      </Box>
      {chatH.incoming && showOptions && (
        <DotsThreeVertical
          id={`option-btn-${chatH.id}`}
          className={
            theme.palette.mode === "dark" ? "threeDotWhite" : "threeDotBlack"
          }
          onClick={handleClick}
          size={20}
        />
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `option-btn-${chatH.id}`,
        }}
        anchorOrigin={{
          horizontal: chatH.incoming ? "right" : "left",
          vertical: "top",
        }}
        transformOrigin={{
          horizontal: chatH.incoming ? "left" : "right",
          vertical: "top",
        }}
      >
        <Stack spacing={1}>
          {Message_options.map((title) => (
            <MenuItem key={title.title} onClick={handleClose}>
              {title.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </Stack>
  );
}


