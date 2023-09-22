import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import { SideBar } from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { clearSocket, connectSocket, socket } from "../../Socket";
import { GetUserData, fetchDirectConversationChats, fetchFriends, fetchRequests, fetchUsers, updateUserStatus } from "../../RTK/Slices/userSlice";
import { AddSnackBar } from "../../RTK/Slices/appSlice";

const DashboardLayout = () => {
  const user_id =  window.localStorage.getItem("user_id");
  const {isLoggedIn} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(isLoggedIn){
      window.onload = ()=>{
        if(!window.location.hash){
          window.location = window.location + "#loaded";
          window.location.reload();
          return;
        }
      }
      if(!socket){
        connectSocket(user_id);
      }
      if(socket){
        dispatch(fetchRequests());
        dispatch(fetchFriends());
        dispatch(fetchUsers());
        dispatch(GetUserData());

        socket.on("new_friend_request",(data)=>{
          dispatch(AddSnackBar({message:data.message,severity:"success"}));
          dispatch(fetchRequests());
        });
        socket.on("request_sent",(data)=>{
          dispatch(AddSnackBar({message:data.message,severity:"success"}));
        });
        socket.on("request_accepted",(data)=>{
          dispatch(AddSnackBar({message:data.message,severity:data.severity }));
          dispatch(fetchRequests());
        });
        socket.on("update_users_status",(data)=>{
          // list of Conversation
          dispatch(fetchDirectConversationChats());
          
          console.log("update_users_status",data);
          dispatch(updateUserStatus(data));
        });
        
        // logs for socket
        socket.on("connect_error",(err)=>{
          console.log("connect_error");
          console.log(err.message);
          console.log(err.message.TransportError);
          console.log(err);
          dispatch(AddSnackBar({message:"Error happened due to connection fault try to reconnect another time",severity:"error"}));
        });
        socket.on("Connecting",(err)=>{
          console.log("Connecting",err);
        });
        socket.on("Connect_failed",(err)=>{
          console.log("Connect_failed",err);
        });
        socket.on("Reconnect ",(err)=>{
          console.log("Reconnect ",err);
        });
        socket.on("Reconnecting",(err)=>{
          console.log("Reconnecting",err);
        });

      }
      // socket.on("friend_request",()=>{
        
      // });
    }

    return ()=>{
      if(socket){
        
        // socket.emit("end",{user_id});

        socket.off("new_friend_request");
        socket.off("request_sent");
        socket.off("request_accepted");
        socket.off("update_users_status");
        socket.emit('end',{user_id});

        // window.localStorage.removeItem("user_id");

        clearSocket(user_id);
      }
    }
  },[isLoggedIn,user_id]);

  if(!isLoggedIn){
    return <Navigate to={"auth/login"}/>
  }
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%", height: "100%" }}>
        <SideBar />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
