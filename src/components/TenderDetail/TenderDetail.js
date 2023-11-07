import classes from "./TenderDetail.module.scss";

import Modal from "../UI/Modal/Modal";

const TenderDetail = ({ tender, onClose }) => {
  return (
    <Modal onClose={onClose} className={classes.details}>
      <h2 className={classes.details__heading}>{tender.subject}</h2>
      <p className={classes.details__item}>
        <b>Тип:</b> {tender.type}
      </p>
      <p className={classes.details__item}>
        <b>Начало приема заявок:</b> {tender.start}
      </p>
      <p className={classes.details__item}>
        <b>Окончание приема заявок:</b> {tender.end}
      </p>
      <a
        className={classes.details__download}
        href={tender.link}
        target="_blank"
        rel="noreferrer"
      >
        Скачать
      </a>

      <button onClick={onClose} className={classes.details__close}>
        <svg
          className={classes.details__icon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </button>
    </Modal>
  );
};

export default TenderDetail;
