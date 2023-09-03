import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import {
  CaretRight,
  Flag,
  Phone,
  Star,
  Trash,
  VideoCamera,
  XCircle,
} from "@phosphor-icons/react";
import { faker } from "@faker-js/faker";
import SimpleBarStyle from "./Scrollbar";
import { useTheme } from "@mui/material/styles";
import { IOSSwitch } from "./IOSSwitch";
import { NotificationsNone } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  SHARED,
  STARRED,
  toggleSideBar,
  updateSidebarType,
} from "../RTK/Slices/appSlice";
import { useState } from "react";
import { forwardRef } from "react";
import { useRef } from "react";

export function Contact() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const BlockCancelRef = useRef();
  const DeleteCancelRef = useRef();

  const handleClickOpenBlock = () => {
    setOpenBlock(true);
    BlockCancelRef.current.focus();
  };

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
    DeleteCancelRef.current.focus();
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
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
          <IconButton onClick={() => dispatch(toggleSideBar())}>
            <XCircle size={24} />
          </IconButton>
          <Typography variant="subtitle1">Contact Info</Typography>
        </Stack>
        <Stack
          p={4}
          spacing={2}
          direction={"column"}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          {/* Contact Info */}
          <Stack p={1} spacing={3}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1.2}
              justifyContent={"space-evenly"}
            >
              <Avatar
                sx={{ width: "60px", height: "60px" }}
                src={faker.image.avatar()}
              />
              <Stack direction={"column"}>
                <Typography variant="article" fontWeight={500}>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {faker.phone.number()}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Stack direction={"column"} alignItems={"center"}>
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant="body2">Audio</Typography>
              </Stack>
              <Stack direction={"column"} alignItems={"center"}>
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant="body2">Voice</Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* about */}
          <Stack p={1} direction={"column"}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "0.8rem", fontWeight: "400" }}
            >
              About
            </Typography>
            <Typography variant="subtitle2">
              Hi there i am using react
            </Typography>
          </Stack>
          {/* Media ,links */}
          <Stack px={1} direction={"column"} spacing={2}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "0.8rem", fontWeight: "400" }}
              >
                Media,links and Docs
              </Typography>
              <Button
                color={"inherit"}
                endIcon={<CaretRight />}
                onClick={() => dispatch(updateSidebarType({ type: SHARED }))}
              >
                {" "}
                201{" "}
              </Button>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              {[1, 2, 3].map((el) => (
                <Box key={el} sx={{ width: "65px", height: "65px" }}>
                  <img src={faker.image.avatar()} loading="lazy"  alt={faker.name.fullName()}/>
                </Box>
              ))}
            </Stack>
          </Stack>
          {/* Starred Messages */}
          <Stack
            px={1}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Star weight="fill" size={24} />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "0.8rem", fontWeight: "400" }}
              >
                Starred Messages
              </Typography>
            </Stack>
            <IconButton
              onClick={() => dispatch(updateSidebarType({ type: STARRED }))}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          {/* Mute Notification */}
          <Stack
            px={1}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <NotificationsNone />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "0.8rem", fontWeight: "400" }}
              >
                Mute Notification
              </Typography>
            </Stack>
            <IOSSwitch />
          </Stack>
          {/* Grope in Common */}
          <Stack px={1} direction={"column"} spacing={2}>
            <Typography variant="caption">1 grope in common</Typography>
            <Stack direction={"row"} spacing={2}>
              <Avatar
                src={faker.image.people()}
                sx={{ width: "45px", height: "45px" }}
              />
              <Stack>
                <Typography variant="subtitle2">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="caption">
                  {faker.random.words()}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              spacing={2}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Flag size={24} />}
                onClick={handleClickOpenBlock}
              >
                Block
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Trash size={24} />}
                onClick={handleClickOpenDelete}
              >
                Delete
              </Button>
              {/* Block */}
              <Dialog
                open={openBlock}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseBlock}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{paddingBottom:"12px"}}>Block</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    {"are you sure you want to block {name}"}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseBlock} variant="contained" color="secondary">Block</Button>
                  <Button onClick={handleCloseBlock} variant="contained" color="error" ref={BlockCancelRef} id="deleteBtn">Cancel</Button>
                </DialogActions>
              </Dialog>
              {/* Delete */}
              <Dialog
                open={openDelete}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseDelete}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>Delete Conversation</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    are you sure you want to delete this conversation
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDelete} variant="contained" color="secondary">Delete</Button>
                  <Button onClick={handleCloseDelete} variant="contained" color="error" ref={DeleteCancelRef}>Cancel</Button>
                </DialogActions>
              </Dialog>
            </Stack>
          </Stack>
        </Stack>
      </SimpleBarStyle>
    </Box>
  );
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
