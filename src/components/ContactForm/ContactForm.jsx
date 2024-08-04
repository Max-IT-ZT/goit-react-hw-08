import { IoPersonAddSharp } from "react-icons/io5";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "auto",
        marginTop: 2,
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Formik
          initialValues={{
            name: "",
            number: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box>
                  <Typography variant="body1" htmlFor={nameId}>
                    Username
                  </Typography>
                  <Field
                    as={TextField}
                    id={nameId}
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    fullWidth
                    error={touched.name && Boolean(errors.name)}
                    helperText={<ErrorMessage name="name" />}
                  />
                </Box>
                <Box>
                  <Typography variant="body1" htmlFor={numberId}>
                    Phone Number
                  </Typography>
                  <Field
                    as={TextField}
                    id={numberId}
                    name="number"
                    type="tel"
                    placeholder="Enter phone number"
                    fullWidth
                    error={touched.number && Boolean(errors.number)}
                    helperText={<ErrorMessage name="number" />}
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<IoPersonAddSharp />}
                >
                  Add contact
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
