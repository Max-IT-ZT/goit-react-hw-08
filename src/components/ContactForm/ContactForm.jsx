import { IoPersonAddSharp } from "react-icons/io5";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

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
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <span className={css.fieldSpan}>
          <label className={css.fieldLabel} htmlFor={nameId}>
            Username
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameId}
            placeholder="Enter name"
          />
        </span>
        <ErrorMessage className={css.fieldError} name="name" component="span" />
        <span className={css.fieldSpan}>
          <label className={css.fieldLabel} htmlFor={numberId}>
            Phone Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberId}
            placeholder="Enter phone number"
          />
        </span>
        <ErrorMessage
          className={css.fieldError}
          name="number"
          component="span"
        />
        <button className={css.btn} type="submit">
          <IoPersonAddSharp /> Add contact
        </button>
      </Form>
    </Formik>
  );
}
