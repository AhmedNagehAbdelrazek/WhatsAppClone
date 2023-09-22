import { Box, keyframes, styled } from "@mui/material";

export const LoadingDownBar = styled(Box)(({ theme }) => ({
  width: "99%",
  height: "10px",
  backgroundColor: "#5b96f7",
  borderTopLeftRadius: "12px",
  borderBottomLeftRadius: "12px",
  paddingLeft: "10px",
  animationName:loadingAnimation,
  animationDuration: "1.5s",
  animationTimingFunction: "ease-out"

}));

const loadingAnimation = keyframes({
    "0%":{width: "0px"},
    "100%":{width:"99%"}
});
