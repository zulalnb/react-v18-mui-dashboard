import { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContext";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignInCard() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          setLoading(true);
          setLoggedIn(true);
          setOpen(true);
          login({ email: values.email });
          navigate("/dashboard");
        } catch (error) {
          setErrorMessage(
            error.status === 400
              ? "You entered wrong credentials. Please try again."
              : "Please try again."
          );
          setOpen(true);
          setLoggedIn(false);
        } finally {
          setLoading(false);
        }
      },
    });

  return (
    <Card variant="outlined">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={3000}
      >
        <Alert
          severity={loggedIn ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {loggedIn ? "Successfully logged in." : errorMessage}
        </Alert>
      </Snackbar>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign In
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            fullWidth
            variant="outlined"
            color={touched.email && Boolean(errors.email) ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            fullWidth
            variant="outlined"
            color={
              touched.password && Boolean(errors.password) ? "error" : "primary"
            }
          />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" loading={loading}>
          Sign In
        </Button>
      </Box>
    </Card>
  );
}
