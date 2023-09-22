import { Box, Stack } from "@mui/material";
import NoChat from "../../assets/Illustration/NoChat";
import { LoadingDownBar } from "../../components/LoadingDownBar";

export default function SelectAConversationSide() {
  return (
    <Box sx={{ width: "100%", height: "100%" , bgcolor:"inherit" }}>
      <Stack sx={{ height: "100%", width: "100%" }} alignItems={"end"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "100%", width: "100%" }}
        >
          <NoChat />
        </Stack>
        <LoadingDownBar/>
      </Stack>
    </Box>
  );
}
