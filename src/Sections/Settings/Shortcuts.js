import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";

function Shortcuts({ open, handleClose }) {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        sx={{ p: 4 }}
      >
        <DialogTitle>Keyword Shortcuts</DialogTitle>
        <DialogContent sx={{mt:3}}>
          <Grid container rowSpacing={1.5} columnSpacing={4}>
            {shortcutsList.map(({ key, title, combination }) => {
              return (
                <Grid key={key} item xs={6} >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"space-between"}
                  >
                    <Typography variant="body2">{title}</Typography>
                    <Stack direction={"row"} alignItems="center" spacing={2}>
                      {combination.map((val) => {
                        return (
                          <Button key={val} disabled variant="contained" color="info">                            
                            {val}
                          </Button>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} variant="contained">Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Shortcuts;

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const shortcutsList = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Delete Chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    key: 4,
    title: "Pin Chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    key: 5,
    title: "Search",
    combination: ["Cmd", "F"],
  },
  {
    key: 6,
    title: "Search Chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    key: 7,
    title: "Next Chat",
    combination: ["Cmd", "N"],
  },
  {
    key: 8,
    title: "Next Step",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 9,
    title: "Previous Step",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "New Group",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profile & About",
    combination: ["Cmd", "P"],
  },
  {
    key: 12,
    title: "Increase speed of voice message",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Decrease speed of voice message",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Settings",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Emoji Panel",
    combination: ["Cmd", "E"],
  },
  {
    key: 16,
    title: "Sticker Panel",
    combination: ["Cmd", "S"],
  },
];
