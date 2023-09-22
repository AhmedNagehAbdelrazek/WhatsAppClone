import { Button, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

function FormBtn({ value = "", ...other }) {
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <Button
      onClick={() => {}}
      fullWidth
      color="inherit"
      size="large"
      type="submit"
      variant="contained"
      sx={{
        bgcolor: "text.primary",
        color: (theme) =>
          theme.palette.mode === "light" ? "common.white" : "grey.800",
        "&:hover": {
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          bgcolor: "primary.main",
        },
      }}
      {...other}
    >
      {isLoading ? (
        <CircularProgress
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          }}
          size={20}
        />
      ) : (
        value
      )}
    </Button>
  );
}

export default FormBtn;
