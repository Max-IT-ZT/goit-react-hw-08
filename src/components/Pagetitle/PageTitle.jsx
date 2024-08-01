import css from "./PageTitle.module.css";
export default function PageTitle() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>
        Your Personal Phone Book: Easy Access to All Contacts
      </h2>
      <p className={css.text}>
        To access all the features of our phone book, please register or log in
        to your account. This will allow you to save contacts, edit them and
        quickly find the information you need. Registration takes only a few
        minutes and your data will be securely protected. Enjoy the convenient
        use of our application!
      </p>
    </div>
  );
}
