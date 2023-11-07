import classes from "./InstructionContent.module.scss";

const InstructionContent = () => {
  return (
    <section>
      <h1>Инструкция</h1>
      <p className={classes.instruction__text}>
        Для участия Вам необходимо скачать пакет документов соответствующего
        тендера, изучить техническое задание и&nbsp;рабочую документацию
        на&nbsp;предмет возникающих вопросов. Затем заполнить форму
        коммерческого предложения и&nbsp;отправить нам на&nbsp;электронную почту{" "}
        <a href="mailto:sis8062@yandex.ru">sis8062@yandex.ru</a> до&nbsp;даты
        окончания приема заявок.
      </p>
      <div className={classes.instruction__docs}>
        <h2 className={classes.instruction__subheading}>
          Состав пакета документов
        </h2>
        <ol className={classes.instruction__list}>
          <li className={classes.instruction__item}>
            1. Техническое задание (подробное описание тендера).
          </li>
          <li className={classes.instruction__item}>
            2. Рабочая документация (чертежи и схемы).
          </li>
          <li className={classes.instruction__item}>
            3. Форма коммерческого предложения (для заполнения).
          </li>
          <li className={classes.instruction__item}>
            4. Унифицированная форма коммерческого предложения.
          </li>
        </ol>
      </div>
      <p className={classes.instruction__text}>
        В&nbsp;случае, если у&nbsp;Вас есть вопросы/замечания по&nbsp;объемам
        работ в&nbsp;Форме&nbsp;КП, также укажите всё в&nbsp;электронном письме.
      </p>
    </section>
  );
};

export default InstructionContent;
