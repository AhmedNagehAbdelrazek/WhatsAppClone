import { createSlice } from "@reduxjs/toolkit";

export const SHARED = "SHARED"
export const CONTACT = "CONTACT"
export const STARRED = "STARRED"

const initialState = {
    sideBar:{
        open:false,
        type:CONTACT //can be "CONTACT" , "STARRED" MESSAGES ,"SHARED" MEDIA
    }
}


const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        // Toggle SideBar 
        toggleSideBar:(state,action)=>{
            state.sideBar.open = !state.sideBar.open;
            if(!state.sideBar.open){
                state.sideBar.type = CONTACT;
            }
        },
        updateSidebarType:(state,action)=>{
            state.sideBar.type = action.payload.type;
        }
    },
})

export const {toggleSideBar,updateSidebarType} = appSlice.actions;
export default appSlice.reducer;