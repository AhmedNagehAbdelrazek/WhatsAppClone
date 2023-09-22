import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  Alert,
  Stack,
  Box,
  Chip,
} from "@mui/material";
import { forwardRef } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { faker } from "@faker-js/faker";
import RHFAutoComplete from "./../../components/hook-form/RHFAutoComplete";
import { useEffect } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateGroup({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={"xs"}
      TransitionComponent={Transition}
      keepMounted
      // onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h4">Create new Group</Typography>
          {/* <IconButton onClick={handleClose}>
            <XCircle />
          </IconButton> */}
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 4 }}>
          <CreateGroupForm handleClose={handleClose} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

function CreateGroupForm({ handleClose }) {

  const CreateGroupSchema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    member: Yup.array().min(
      2,
      "You can't Create a group with less than 2 members"
    ),
  });

  const defaultValues = {
    title: "",
    member: "",
  };

  const methods = useForm({
    resolver: yupResolver(CreateGroupSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    setError,

    formState: {
      errors,
      isSubmitSuccessful,
    },
  } = methods;
  useEffect(() => {
    handleClose();
    reset(defaultValues, {
      keepDirty: false,
      keepErrors: false,
      keepDefaultValues: true,
      keepIsSubmitted: false,
      keepValues: false,
      keepDirtyValues: false,
      keepIsValid: false,
      keepSubmitCount: false,
      keepTouched: false,
    });
  }, [isSubmitSuccessful]);
  const onSubmit = async () => {
    try {
      //server calling code
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.title && (
          <Alert severity="error">Title: {errors.title.message}</Alert>
        )}
        {!!errors.member && (
          <Alert severity="error">Members: {errors.member.message}</Alert>
        )}

        <RHFTextField name="title" label="Name" />
        <RHFAutoComplete
          name="member"
          label={"Members"}
          multiple
          freeSolo
          options={options}
          getOptionLabel={(option) => option.name}
          ChipProps={{ size: "medium" }}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip label={option.name} {...getTagProps({ index })} />
            ))
          }
        />

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"end"}
          spacing={2}
        >
          <Button
            onClick={() => {
              handleClose();
              reset(defaultValues);
            }}
            variant="outlined"
            size="large"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

const options = [
  {
    name: "Ahmed",
    icon: "",
  },
  {
    name: "mohamed",
    icon: "",
  },
  {
    name: "Mark",
    icon: faker.image.avatar(),
  },
  {
    name: "Pola",
    icon: "",
  },
];
