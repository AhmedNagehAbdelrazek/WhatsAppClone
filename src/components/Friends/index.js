

import { Box, styled } from "@mui/material";

export const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.action.hover,
    boxShadow: theme.shadows[10],
  },
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  transition: "box-shadow 250ms,background-color 200ms",
}));

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(fname, lname) {
  return {
    sx: {
      bgcolor: stringToColor(fname + " " + lname),
    },
    children: `${fname?.split(" ")[0][0].toUpperCase()}${lname
      ?.split(" ")[0][0]
      .toUpperCase()}`,
  };
}

export {default as UserComponent} from './UserComponent';
export {default as FriendComponent} from './FriendComponent';
export {default as FriendRequestComponent} from './FriendRequestComponent'; 
