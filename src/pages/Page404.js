import { Container, Stack, Typography } from "@mui/material";
import { SmileyXEyes } from "@phosphor-icons/react";
import React from "react";

const Page404 = () => {
  return (
    <>
      <Container sx={{ height: "100%" }}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "100%" }}
        >
          <Typography variant="h2">The Page Not Found 404</Typography>
          <SmileyXEyes size={128} />
          
        </Stack>
      </Container>
    </>
  );
};

export default Page404;
