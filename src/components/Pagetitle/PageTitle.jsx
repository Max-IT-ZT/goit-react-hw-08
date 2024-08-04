import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { GiPhone } from "react-icons/gi";
import { FaUserAlt, FaSignInAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

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
}));

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  fontSize: "16px",
  padding: theme.spacing(1, 3),
}));

const Testimonials = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
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
          Contact Us
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
            "Save Contacts",
            "Edit Information",
            "Quick Search",
            "Secure Data",
          ].map((feature) => (
            <Paper
              key={feature}
              sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: 2,
                textAlign: "center",
                width: 200,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {feature}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>

      <Testimonials>
        <Typography variant="h5" component="h2" gutterBottom>
          Testimonials
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
              name: "John Doe",
              review:
                "This phone book app has made managing my contacts so much easier!",
            },
            {
              name: "Jane Smith",
              review: "I love how secure and easy to use this application is!",
            },
          ].map((testimonial, index) => (
            <Paper
              key={index}
              sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: 2,
                textAlign: "center",
                width: 250,
              }}
            >
              <Typography variant="body1" gutterBottom>
                {testimonial.review}
              </Typography>
              <Typography variant="subtitle1">{testimonial.name}</Typography>
            </Paper>
          ))}
        </Box>
      </Testimonials>

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
