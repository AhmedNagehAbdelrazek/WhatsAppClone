import {
  Badge,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFriends,
  fetchRequests,
  fetchUsers,
} from "../../RTK/Slices/userSlice";
import {
  FriendComponent,
  FriendRequestComponent,
  UserComponent,
} from "../../components/Friends";
import { SimpleBarStyle } from "../../components/StyledComponents/Scrollbar";

export default function Friends({ open, handleClose }) {
  const [value, setValue] = useState(0);
  const { friendRequests } = useSelector((state) => state.user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <SimpleBarStyle
        timeout={500}
        clickOnTrack={false}
        style={{ maxHeight: "100%" }}
      >
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={handleClose}
          keepMounted
          sx={{ p: 4 }}
        >
          <Stack p={2} sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              sx={{ textAlign: "center" }}
            >
              <Tab label="Explore" />
              <Tab label="Friends" />
              <Tab
                label="Requests"
                sx={{ px: 0.5, gap: "3px" }}
                iconPosition="end"
                icon={
                  friendRequests.length > 0 ? <Badge
                  overlap="circular"
                  badgeContent={friendRequests?.length}
                  color="primary"
                  max={99}
                />:
                null
                }
              />
            </Tabs>
          </Stack>
          {/* Dialog content */}
          <DialogContent sx={{ height: "50vh", minHeight: "120px" }}>
            <SimpleBarStyle
              timeout={500}
              clickOnTrack={false}
              style={{ maxHeight: "100%" }}
            >
              <Stack sx={{ height: "100%" }} spacing={2}>
                {(() => {
                  switch (value) {
                    case 0: // display all users
                      return <UserList />;
                    case 1: // display friends
                      return <FriendsList handleClose={handleClose} />;
                    case 2: // display friend requests
                      return <RequestList />;
                    default:
                      return <></>;
                  }
                })()}
              </Stack>
            </SimpleBarStyle>
          </DialogContent>
        </Dialog>
      </SimpleBarStyle>
    </>
  );
}

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { users } = useSelector((state) => state.user);
  return (
    <Stack spacing={1}>
      {users?.map((user) => {
        return <UserComponent key={user._id} {...user} />;
      })}
    </Stack>
  );
};
const FriendsList = ({handleClose}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, []);

  const { friends } = useSelector((state) => state.user);
  return (
    <Stack spacing={1}>
      {friends?.map((friend) => {
        return <FriendComponent handleClose={handleClose} key={friend._id} {...friend} />;
      })}
    </Stack>
  );
};
const RequestList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequests());
  }, []);

  const { friendRequests } = useSelector((state) => state.user);
  return (
    <Stack spacing={1}>
      {friendRequests?.map((request) => {
        return <FriendRequestComponent key={request._id} {...request} />;
      })}
    </Stack>
  );
};
