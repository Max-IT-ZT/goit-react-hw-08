import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import { ThemeProvider, useTheme } from "../../theme/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";

const AppThemeProvider = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            background: isDarkMode
              ? "linear-gradient(to right, #333, #444)" // Темний фон
              : "linear-gradient(to right, #f8f9fa, #e9ecef)", // Світлий фон
          },
        }}
      />
      {children}
    </MuiThemeProvider>
  );
};

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider>
      <AppThemeProvider>
        {isRefreshing ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Layout />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo={"/contacts"}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegistrationPage />}
                    redirectTo={"/contacts"}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={<ContactsPage />} redirectTo={"/"} />
                }
              />
            </Routes>
            <Toaster />
          </Suspense>
        )}
      </AppThemeProvider>
    </ThemeProvider>
  );
}
