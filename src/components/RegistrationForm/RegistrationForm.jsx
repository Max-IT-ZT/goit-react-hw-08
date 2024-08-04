import { Formik, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import {
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Lock,
} from "@mui/icons-material";
import * as Yup from "yup";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useTheme } from "@emotion/react";

const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (values, actions) => {
    try {
      // Виконуємо реєстрацію
      const resultAction = await dispatch(register(values));

      // Перевіряємо наявність помилок
      if (register.rejected.match(resultAction)) {
        toast.error("Registration failed. Please try again.");
      } else {
        toast.success("Registration successful!");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
    actions.resetForm();
  };
  const theme = useTheme();
  const headerColor = theme.palette.mode === "dark" ? "#e0e0e0" : "#333333";

  return (
    <Container maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          elevation={3}
          sx={{
            margin: 3,
            padding: 4,
            borderRadius: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box textAlign="center" mb={4}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: headerColor,
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <Lock sx={{ mr: 1, fontSize: "2rem" }} /> Register
              </Typography>
            </motion.div>
          </Box>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ getFieldProps, errors, touched }) => (
              <Form autoComplete="off">
                <Box mb={2}>
                  <TextField
                    {...getFieldProps("name")}
                    label="Username"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    {...getFieldProps("email")}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    {...getFieldProps("password")}
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                            aria-label="Toggle password visibility"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        padding: "10px 0",
                        fontSize: "16px",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                        },
                      }}
                    >
                      Register
                    </Button>
                  </motion.div>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </motion.div>
    </Container>
  );
}
