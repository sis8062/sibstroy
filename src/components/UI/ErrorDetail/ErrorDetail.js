import { useRouteError } from "react-router-dom";

import classes from "./ErrorDetail.module.scss";

const ErrorDetail = () => {
  const error = useRouteError();

  let message = error.message;

  if (error.status === 404) {
    message = "Страница не найдена";
  }

  return (
    <section className={classes.error}>
      <h1>Что-то пошло не так</h1>
      <p>{message}</p>
    </section>
  );
};

export default ErrorDetail;
