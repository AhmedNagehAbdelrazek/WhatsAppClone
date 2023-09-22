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
  Phone,
} from "@phosphor-icons/react";
import { Call_History} from "../../data";
import { SimpleBarStyle } from "../../components/StyledComponents/Scrollbar";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/StyledComponents/Search";
import { CallElement } from "../../components/CallElement";
import StartNewConversation from "../../Sections/Main/StartNewConcersation";
import SelectAConversationSide from "../Extra/SelectAConverstionSide";



export default function Call() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <Stack sx={{width:"100%"}} direction="row">
        {/* Left Side */}
      <Box
        sx={{
          position: "relative",
          width: "30%",
          minWidth:"330px",
          maxWidth:"330px",
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
            <Typography variant="h5">Call Log</Typography>
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
              endIcon={<Phone/>}
              onClick={() => handleClickOpen()}
              sx={{
                typography: "body2",
                justifyContent: "space-between",
                px: 2,
              }}
              size="large"
            >
              Start New Conversation
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
                  <Stack spacing={1.5}>
                    {Call_History.map((call) => {
                      return <CallElement key={call.id} call={call} />;
                    })}
                  </Stack>
                </Stack>
                
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
        <StartNewConversation open={open} handleClose={handleClose}/>
      </Box>
      
      {/* Right Side */}
      {/* //TODO => Reuse Conversation Components */}
       <SelectAConversationSide/>
    </Stack>
  );
}
