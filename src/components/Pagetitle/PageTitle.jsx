import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { GiPhone, GiSave, GiPadlock, GiMagnifyingGlass } from "react-icons/gi";
import { FaUserAlt, FaSignInAlt } from "react-icons/fa";
import { AiFillPhone, AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PageContainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(4),
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(to right, #333, #444)"
      : "linear-gradient(to right, #f8f9fa, #e9ecef)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const HeroSection = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  fontSize: "16px",
  padding: theme.spacing(1, 3),
  "& svg": {
    marginRight: theme.spacing(1),
  },
}));

const FAQ = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export default function PageTitle() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <PageContainer>
      <HeroSection>
        <GiPhone style={{ fontSize: 50, color: "#007bff" }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Your Personal Phone Book
        </Typography>
        <Typography variant="h6" paragraph>
          Easy Access to All Contacts
        </Typography>
        <Typography variant="body1" paragraph>
          To access all the features of our phone book, please register or log
          in to your account. This will allow you to save contacts, edit them,
          and quickly find the information you need. Registration takes only a
          few minutes and your data will be securely protected. Enjoy the
          convenient use of our application!
        </Typography>
        {!isLoggedIn && (
          <Box>
            <ActionButton
              variant="contained"
              color="primary"
              startIcon={<FaUserAlt />}
              onClick={() => handleNavigate("/register")}
            >
              Register
            </ActionButton>
            <ActionButton
              variant="outlined"
              color="primary"
              startIcon={<FaSignInAlt />}
              onClick={() => handleNavigate("/login")}
            >
              Login
            </ActionButton>
          </Box>
        )}
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AiFillPhone />}
          sx={{ mt: 3 }}
        >
          <a
            href="https://www.linkedin.com/in/maksym-babushko-1049b7273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact Us
          </a>
        </Button>
      </HeroSection>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginBottom: 4,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Why Choose Us?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            {
              icon: <GiSave style={{ fontSize: 30, color: "#007bff" }} />,
              text: "Save Contacts",
            },
            {
              icon: (
                <AiOutlineEdit style={{ fontSize: 30, color: "#007bff" }} />
              ),
              text: "Edit Information",
            },
            {
              icon: (
                <GiMagnifyingGlass style={{ fontSize: 30, color: "#007bff" }} />
              ),
              text: "Quick Search",
            },
            {
              icon: <GiPadlock style={{ fontSize: 30, color: "#007bff" }} />,
              text: "Secure Data",
            },
          ].map((feature, index) => (
            <Paper
              key={index}
              sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: 2,
                textAlign: "center",
                width: 200,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              {feature.icon}
              <Typography variant="h6" gutterBottom>
                {feature.text}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
      <FAQ>
        <Typography variant="h5" component="h2" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: "left",
          }}
        >
          {[
            {
              question: "How can I save a new contact?",
              answer:
                "Simply click on the 'Add Contact' button and fill in the necessary information.",
            },
            {
              question: "Is my data secure?",
              answer:
                "Yes, we use the latest security measures to ensure your data is protected.",
            },
          ].map((faq, index) => (
            <Paper
              key={index}
              sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6">{faq.question}</Typography>
              <Typography variant="body1">{faq.answer}</Typography>
            </Paper>
          ))}
        </Box>
      </FAQ>
    </PageContainer>
  );
}
