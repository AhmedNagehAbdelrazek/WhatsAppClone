import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { SimpleBarStyle } from "./../components/StyledComponents/Scrollbar";
import { ArrowLeft, LinkSimple } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { CONTACT, updateSidebarType } from "../RTK/Slices/appSlice";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Download } from "@mui/icons-material";
import PDF from '../assets/Images/PDF.png'

function SharedMessages() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [value, setValue] = useState("Media");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          width: "20%",
          minWidth: "320px",
          maxWidth: "320px",
          height: "100vh",
          borderLeft: `2px solid ${
            theme.palette.mode === "light"
              ? "rgba(0,0,0,0.24)"
              : "rgba(145, 158, 171, 0.24)"
          }`,
        }}
      >
        <SimpleBarStyle>
          <Stack
            p={3}
            sx={{
              boxShadow: `0px 0px 2px ${
                theme.palette.mode === "light"
                  ? "rgba(0,0,0,0.24)"
                  : "rgba(145, 158, 171, 0.24)"
              }`,
            }}
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            justifyContent={"start"}
          >
            <IconButton
              onClick={() => dispatch(updateSidebarType({ type: CONTACT }))}
            >
              <ArrowLeft size={24} />
            </IconButton>
            <Typography variant="subtitle1">Shared Media</Typography>
          </Stack>
          {/* Bar */}
          <Box p={2} sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              centered="true"
              indicatorColor="secondary"
              variant="fullWidth"
            >
              <Tab value={"Media"} label="Media" {...a11yProps(0)} />
              <Tab value={"Links"} label="Links" {...a11yProps(1)} />
              <Tab value={"Docs"} label="Docs" {...a11yProps(2)} />
            </Tabs>
          </Box>
          {value &&
            (() => {
              switch (value) {
                case "Media":
                  return <Media />;
                case "Links":
                  return <Links />;
                case "Docs":
                  return <Docs />;
                  default:
                    break;
              }
            })()}
          {/* Media */}
        </SimpleBarStyle>
      </Box>
    </>
  );
}

export default SharedMessages;

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Media() {
  const theme = useTheme();
  return (
    <Stack p={2} spacing={2}>
      <Stack spacing={2}>
        <Typography variant="caption">26thOct22</Typography>
        <Grid container spacing={1} sx={{ width: "100%" }}>
          {[0, 1, 2, 3, 4].map((el) => (
            <Grid key={el} item xs={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  boxShadow: `0px 0px 4px ${
                    theme.palette.mode === "light"
                      ? "rgba(0,0,0,0.24)"
                      : "rgba(145, 158, 171, 0.24)"
                  }`,
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{ transform: "scale(0.85)" }}
                  src={faker.image.animals()}
                  alt={faker.name.fullName()}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
      {/* copy */}
      <Stack spacing={2}>
        <Typography variant="caption">27thOct22</Typography>
        <Grid container spacing={1} sx={{ width: "100%" }}>
          {[0, 1, 2, 3, 4, 5].map((el) => (
            <Grid key={el} item xs={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  boxShadow: `0px 0px 4px ${
                    theme.palette.mode === "light"
                      ? "rgba(0,0,0,0.24)"
                      : "rgba(145, 158, 171, 0.24)"
                  }`,
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{ transform: "scale(0.85)" }}
                  src={faker.image.animals()}
                  alt={faker.name.fullName()}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
      {/* copy */}
      <Stack spacing={2}>
        <Typography variant="caption">30thOct22</Typography>
        <Grid container spacing={1} sx={{ width: "100%" }}>
          {[0, 1, 2].map((el) => (
            <Grid key={el} item xs={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  boxShadow: `0px 0px 4px ${
                    theme.palette.mode === "light"
                      ? "rgba(0,0,0,0.24)"
                      : "rgba(145, 158, 171, 0.24)"
                  }`,
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{ transform: "scale(0.85)" }}
                  src={faker.image.animals()}
                  alt={faker.name.fullName()}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

function Links() {
  const theme = useTheme();
  return (
    <Stack p={2} spacing={2}>
      <Stack spacing={2}>
        <Typography variant="caption">26thOct22</Typography>
        <Stack spacing={3}>
          <Box sx={{ width: "100%" }}>
            <Stack
              p={1.2}
              direction={"row"}
              spacing={1.5}
              sx={{
                borderRadius: "10px",
                boxShadow: `0px 0px 4px ${
                  theme.palette.mode === "light"
                    ? "rgba(0,0,0,0.24)"
                    : "rgba(145, 158, 171, 0.24)"
                }`,
              }}
            >
              <Stack
                sx={{
                  bgcolor: theme.palette.mode === "light" ? "#D9D9D9" : "#555",
                  borderRadius: "10px",
                  width: "64px",
                  height: "64px",
                }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button sx={{ aspectRatio: "1" }} color="inherit">
                  <LinkSimple size={32} />
                </Button>
              </Stack>
              <Stack p={1} direction={"column"} spacing={1.1}>
                <Typography
                  variant="subtitle1"
                  fontSize={12}
                  sx={{ minInlineSize: "max-content" }}
                >
                  {faker.internet.url()}
                </Typography>
                <Link href="#" underline="none" fontSize={12}>
                  {faker.internet.domainName()}
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        {/* copy link */}
        <Stack spacing={3}>
          <Box sx={{ width: "100%" }}>
            <Stack
              p={1.2}
              direction={"row"}
              spacing={1.5}
              sx={{
                borderRadius: "10px",
                boxShadow: `0px 0px 4px ${
                  theme.palette.mode === "light"
                    ? "rgba(0,0,0,0.24)"
                    : "rgba(145, 158, 171, 0.24)"
                }`,
              }}
            >
              <Stack
                sx={{
                  bgcolor: theme.palette.mode === "light" ? "#D9D9D9" : "#555",
                  borderRadius: "10px",
                  width: "64px",
                  height: "64px",
                }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button sx={{ aspectRatio: "1" }} color="inherit">
                  <LinkSimple size={32} />
                </Button>
              </Stack>
              <Stack p={1} direction={"column"} spacing={1.1}>
                <Typography
                  variant="subtitle1"
                  fontSize={12}
                  sx={{ minInlineSize: "max-content" }}
                >
                  {faker.internet.url()}
                </Typography>
                <Link href="#" underline="none" fontSize={12}>
                  {faker.internet.domainName()}
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        {/* copy link */}
        <Stack spacing={3}>
          <Box sx={{ width: "100%" }}>
            <Stack
              p={1.2}
              direction={"row"}
              spacing={1.5}
              sx={{
                borderRadius: "10px",
                boxShadow: `0px 0px 4px ${
                  theme.palette.mode === "light"
                    ? "rgba(0,0,0,0.24)"
                    : "rgba(145, 158, 171, 0.24)"
                }`,
              }}
            >
              <Stack
                sx={{
                  bgcolor: theme.palette.mode === "light" ? "#D9D9D9" : "#555",
                  borderRadius: "10px",
                  width: "64px",
                  height: "64px",
                }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button sx={{ aspectRatio: "1" }} color="inherit">
                  <LinkSimple size={32} />
                </Button>
              </Stack>
              <Stack p={1} direction={"column"} spacing={1.1}>
                <Typography
                  variant="subtitle1"
                  fontSize={12}
                  sx={{ minInlineSize: "max-content" }}
                >
                  {faker.internet.url()}
                </Typography>
                <Link href="#" underline="none" fontSize={12}>
                  {faker.internet.domainName()}
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      {/* copy */}
      <Stack spacing={2}>
        <Typography variant="caption">26thOct22</Typography>
        <Stack spacing={3}>
          <Box sx={{ width: "100%" }}>
            <Stack
              p={1.2}
              direction={"row"}
              spacing={1.5}
              sx={{
                borderRadius: "10px",
                boxShadow: `0px 0px 4px ${
                  theme.palette.mode === "light"
                    ? "rgba(0,0,0,0.24)"
                    : "rgba(145, 158, 171, 0.24)"
                }`,
              }}
            >
              <Stack
                sx={{
                  bgcolor: theme.palette.mode === "light" ? "#D9D9D9" : "#555",
                  borderRadius: "10px",
                  width: "64px",
                  height: "64px",
                }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button sx={{ aspectRatio: "1" }} color="inherit">
                  <LinkSimple size={32} />
                </Button>
              </Stack>
              <Stack p={1} direction={"column"} spacing={1.1}>
                <Typography
                  variant="subtitle1"
                  fontSize={12}
                  sx={{ minInlineSize: "max-content" }}
                >
                  {faker.internet.url()}
                </Typography>
                <Link href="#" underline="none" fontSize={12}>
                  {faker.internet.domainName()}
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

function Docs() {
  const theme = useTheme();
  return (
    <Stack p={2} spacing={2}>
      <Stack spacing={2}>
        <Typography variant="caption">26thOct22</Typography>
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: `0px 0px 4px ${
              theme.palette.mode === "light"
                ? "rgba(0,0,0,0.24)"
                : "rgba(145, 158, 171, 0.24)"
            }`,
          }}
        >
          <Stack py={1.1} px={1.5} spacing={1}>
            <Box
              sx={{
                width: "100%",
                height: "150px",
                borderRadius: "10px",
                bgcolor: "#D9D9D9",
              }}
            ></Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <img style={{width:"36px",aspectRatio:"1"}} src={PDF} alt={faker.name.fullName()} />
                <Typography variant="subtitle1">Booked Ticket</Typography>
              </Stack>
              <IconButton>
                <Download/>
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        {/* copy */}
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: `0px 0px 4px ${
              theme.palette.mode === "light"
                ? "rgba(0,0,0,0.24)"
                : "rgba(145, 158, 171, 0.24)"
            }`,
          }}
        >
          <Stack py={1.1} px={1.5} spacing={1}>
            <Box
              sx={{
                width: "100%",
                height: "150px",
                borderRadius: "10px",
                bgcolor: "#D9D9D9",
              }}
            ></Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <img style={{width:"36px",aspectRatio:"1"}} src={PDF} alt={faker.name.fullName()} />
                <Typography variant="subtitle1">Booked Ticket</Typography>
              </Stack>
              <IconButton>
                <Download/>
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: `0px 0px 4px ${
              theme.palette.mode === "light"
                ? "rgba(0,0,0,0.24)"
                : "rgba(145, 158, 171, 0.24)"
            }`,
          }}
        >
          <Stack py={1.1} px={1.5} spacing={1}>
            <Box
              sx={{
                width: "100%",
                height: "150px",
                borderRadius: "10px",
                bgcolor: "#D9D9D9",
              }}
            ></Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <img style={{width:"36px",aspectRatio:"1"}} src={PDF} alt={faker.name.fullName()} />
                <Typography variant="subtitle1">Booked Ticket</Typography>
              </Stack>
              <IconButton>
                <Download/>
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
