import { Field, Formik, Form } from "formik";
import { useState } from "react";
import css from "./RegistrationForm.module.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div>
      <h2 className={css.title}>Register your account</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field type="text" name="name" className={css.input} />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
          </label>
          <label className={css.label}>
            Password
            <div className={css.passwordContainer}>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className={css.input}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={css.eyeButton}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <VscEyeClosed size={20} />
                ) : (
                  <VscEye size={20} />
                )}
              </button>
            </div>
          </label>
          <button type="submit" className={css.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
