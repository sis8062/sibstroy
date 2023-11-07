import classes from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__block}>
          <h3 className={classes.footer__header}>Реквизиты</h3>
          <ul className={classes.footer__list}>
            <li className={classes.footer__item}>
              Юр. адрес: 630049, Новосибирская обл., Новосибирск г.,
              Линейная&nbsp;ул., дом &#8470;&nbsp;28, оф.&nbsp;500
            </li>
            <li className={classes.footer__item}>ОГРН: 1145476067659</li>
            <li className={classes.footer__item}>ИНН: 5402576724</li>
            <li className={classes.footer__item}>КПП: 540201001</li>
            <li className={classes.footer__item}>
              Эл. почта:{" "}
              <a
                className={classes.footer__link}
                href="mailto:sis8062@yandex.ru"
              >
                sis8062@yandex.ru
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.footer__block}>
          <h3 className={classes.footer__header}>Наши объекты</h3>
          <ul className={classes.footer__list}>
            <li className={classes.footer__item}>
              <a
                className={classes.footer__link}
                href="https://zhk-cheremushki-na-primorskoy-novosibirsk-i.cian.ru/"
                target="_blank"
                rel="noreferrer"
              >
                ЖК «Черемушки на Приморской»
              </a>
            </li>
            <li className={classes.footer__item}>
              <a
                className={classes.footer__link}
                href="https://zhk-voznesenskiy-novosibirsk-i.cian.ru/"
                target="_blank"
                rel="noreferrer"
              >
                ЖК «Вознесенский»
              </a>
            </li>
            <li className={classes.footer__item}>
              <a
                className={classes.footer__link}
                href="https://zhk-cheremushki-na-pervomayke-novosibirsk-i.cian.ru/"
                target="_blank"
                rel="noreferrer"
              >
                ЖК «Черемушки на Первомайке»
              </a>
            </li>
            <li className={classes.footer__item}>
              <a
                className={classes.footer__link}
                href="https://zhk-cheremushki-na-bugrinke-novosibirsk-i.cian.ru/"
                target="_blank"
                rel="noreferrer"
              >
                ЖК «Черемушки на Бугринке»
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={classes.footer__copyright}>
        © {year} ООО «СИБСТРОЙ». Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
