import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  Alert,
  Stack,
  Box,
  Avatar,
  Chip,
  Autocomplete,
  TextField,
  IconButton,
} from "@mui/material";
import { forwardRef } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { faker } from "@faker-js/faker";
import RHFAutoComplete from "./../../components/hook-form/RHFAutoComplete";
import { useState } from "react";
import { useEffect } from "react";
import { MagnifyingGlass, Phone, VideoCamera, XCircle } from "@phosphor-icons/react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/StyledComponents/Search";
import { useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StartNewConversation({ open, handleClose }) {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={"xs"}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Stack spacing={1}>
        <Typography variant="h4">Start Call</Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={3}
          pl={1}
        >
          <Search
            sx={{
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#CBE0FF"
                  : theme.palette.text.disabled,
            }}
          >
            <SearchIconWrapper>
              <MagnifyingGlass />
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
          <IconButton onClick={handleClose}>
            <XCircle />
          </IconButton>
        </Stack>
        </Stack>
        
      </DialogTitle>
      <DialogContent sx={{height:"70vh"}}>
        <SimpleBarStyle >
        <Stack spacing={2} sx={{mt:4,px:1}}>
            {options.map((member)=>{
                return(<CallCard key={member.name} member={member}/>);
            })}
        </Stack>
        </SimpleBarStyle>
      </DialogContent>
    </Dialog>
  );
}

function CallCard({member}){
    return(<Box p={1.5} sx={{ width:"100%",borderRadius:"12px",boxShadow:"0px 0px 5px rgba(0,0,0,0.24)"}}>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <Avatar/>
            <Stack>
                <Typography variant="body2">{member.name}</Typography>
                <Typography variant="caption" color="text.common">yesterday</Typography>
            </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
            <IconButton>
                <Phone color="green"/>
            </IconButton>
            <IconButton>
                <VideoCamera color="green"/>
            </IconButton>
        </Stack>
    </Stack>
</Box>);
}

const options = [
  {
    name: "Ahmed",
    icon: "",
  },
  {
    name: "mohamed",
    icon: "",
  },
  {
    name: "Mark",
    icon: faker.image.avatar(),
  },
  {
    name: "Pola",
    icon: "",
  },
];
