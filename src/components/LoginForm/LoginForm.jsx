import { Formik, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
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
import { Visibility, VisibilityOff, Lock, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
                <Lock sx={{ mr: 1, fontSize: "2rem" }} /> Sign In
              </Typography>
            </motion.div>
          </Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ getFieldProps }) => (
              <Form autoComplete="off">
                <Box mb={2}>
                  <TextField
                    {...getFieldProps("email")}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
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
                      Sign In
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
