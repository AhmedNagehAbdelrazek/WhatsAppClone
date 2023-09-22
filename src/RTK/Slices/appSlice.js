import { createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import axios from "../../utils/axios";

export const SHARED = "SHARED";
export const CONTACT = "CONTACT";
export const STARRED = "STARRED";

const initialState = {
  sideBar: {
    open: false,
    type: CONTACT, //can be "CONTACT" , "STARRED" MESSAGES ,"SHARED" MEDIA
  },
  last_message:"",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle SideBar
    toggleSideBar: (state, action) => {
      state.sideBar.open = !state.sideBar.open;
      if (!state.sideBar.open) {
        state.sideBar.type = CONTACT;
      }
    },
    resetSideBar: (state, action) => {
      state.sideBar.open = false;
      state.sideBar.type = CONTACT;
    },
    updateSidebarType: (state, action) => {
      state.sideBar.type = action.payload.type;
    },
    AddSnackBar: (state, action) => {
      if(action.payload.message !== undefined && action.payload.severity !== undefined){
        if(state.last_message !== action.payload.message){
          state.last_message = action.payload.message;
          if(action.payload.severity === "error"){
            enqueueSnackbar(action.payload.message, {
              variant: action.payload.severity,  
              anchorOrigin: {horizontal: "right",vertical: "bottom"},
              autoHideDuration: 10000,
            });
          }else{
            enqueueSnackbar(action.payload.message, {
              variant: action.payload.severity,  
              anchorOrigin: {horizontal: "right",vertical: "top"},
              autoHideDuration: 3000,
            });
          }
        }
      }
    },
  },
});

export const {
  toggleSideBar,
  updateSidebarType,
  AddSnackBar,
  resetSideBar,
} = appSlice.actions;
export default appSlice.reducer;


