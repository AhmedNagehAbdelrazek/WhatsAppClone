import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { AddSnackBar } from "./appSlice";
import { socket } from "../../Socket";

export const INDIVIDUAL = "Individual";
export const GROUP = "Group";

const user_id =  window.localStorage.getItem("user_id");

const initialState = {
  firstName: "",
  lastName: "",
  about: "",
  avatar: "",

  users: [],
  friends: [],
  friendRequests: [],

  roomType: "",
  roomId: "",

  conversations: {
    isLoading:false,
    direct_chat:{
      chats: [],
      current_conversation: null,
      current_messages: [],
    },
    group_chat:{},
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
    },
    updateUsers: (state, action) => {
      state.users = action.payload.users;
    },
    updateFriends: (state, action) => {
      state.friends = action.payload.friends;
    },
    updateFriendRequests: (state, action) => {
      state.friendRequests = action.payload.requests;
    },
    updateUserStatus:(state,action)=>{
      state.users = state.users.map((user)=>{
        if(user._id === action.payload.user_id){
          return {...user,status:action.payload.status}
        }
        return user;
      });
      state.friends = state.friends.map((user)=>{
        if(user._id === action.payload.user_id){
          return {...user,status:action.payload.status}
        }
        return user;
      });
      state.friendRequests = state.friendRequests.map((user)=>{
        if(user._id === action.payload.user_id){
          return {...user,status:action.payload.status}
        }
        return user;
      }); 
      state.conversations.direct_chat.chats = state.conversations.direct_chat.chats.map((chat)=>{
        if(chat._id === action.payload.user_id){
          return {...chat,online:action.payload.status === "Online"}
        }
        return chat;
      });
    },
    updateRoom: (state, action) => {
      state.roomType = action.payload.roomType;
      state.roomId = action.payload.roomId;
    },
    fetchDirectConversationChats: (state, action) => {
      console.log("chats" , action.payload);
      state.conversations.direct_chat.chats = action.payload != null || action.payload != undefined  ? action.payload : state.conversations.direct_chat.chats;
    },
    setConversationLoading:(state,action)=>{
      state.conversations.isLoading = action.payload.isLoading;
    },
    clearUserData: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.about = "";
      state.avatar = "";

      state.users = [];
      state.friends = [];
      state.friendRequests = [];

      state.roomType = "";
      state.roomId = "";

      state.conversations.direct_chat.chats = [];
      state.conversations.direct_chat.current_conversation = null;
      state.conversations.direct_chat.current_messages = [];
    }
  },
});

export const {
  getUser,
  updateFriendRequests,
  updateFriends,
  updateUsers,
  updateRoom,
  clearUserData,
  updateUserStatus,
} = userSlice.actions;

export default userSlice.reducer;

export function GetUserData() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(getUser(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function UpdateUserData(formData) {
  return async (dispatch, getState) => {
    await axios
      .patch(
        "/user/update-me",
        { ...formData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(getUser(response.data.data));
        dispatch(AddSnackBar({message:response.data.message,severity:response.data.status}));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function fetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        dispatch(updateUsers({ users: response.data.data }));
      })
      .catch((error) => {
        dispatch(AddSnackBar({ message: error.message, severity: "error" }));
      });
  };
}
export function fetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        dispatch(updateFriends({ friends: response.data.data }));
      })
      .catch((error) => {
        dispatch(AddSnackBar({ message: error.message, severity: "error" }));
      });
  };
}
export function fetchRequests() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        dispatch(updateFriendRequests({ requests: response.data.data }));
      })
      .catch((error) => {
        dispatch(AddSnackBar({ message: error.message, severity: "error" }));
      });
  };
}
export function fetchDirectConversationChats(){
  return async (dispatch, getState) => {
    dispatch(userSlice.actions.setConversationLoading({isLoading:true}));
    console.log("fetchDirectConversationChats");

    socket.emit("get_direct_conversation", { user_id }, (data) => {
      // list of Conversation
      console.log("data",data);
      dispatch(userSlice.actions.setConversationLoading({isLoading:false}));
      dispatch(userSlice.actions.fetchDirectConversationChats(data));
    });
    
  };
}
