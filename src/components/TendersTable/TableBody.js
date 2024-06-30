import classes from "./TableBody.module.scss";

const TableBody = ({ tenders, onShow }) => {
  const showTenderHandler = (e) => {
    onShow(true, e.currentTarget.id);
  };

  const tendersRow = tenders
    .sort(
      (tender1, tender2) =>
        Date.parse(tender1.start.split(".").reverse().join("-")) -
        Date.parse(tender2.start.split(".").reverse().join("-")),
    )
    .map((tender) => (
      <tr
        className={classes.table__row}
        id={tender.id}
        key={tender.id}
        onClick={showTenderHandler}
      >
        <td data-cell="Предмет" className={classes.table__data}>
          {tender.subject}
        </td>
        <td data-cell="Тип" className={classes.table__data}>
          {tender.type}
        </td>
        <td data-cell="Начало" className={classes.table__data}>
          {tender.start}
        </td>
        <td data-cell="Окончание" className={classes.table__data}>
          {tender.end}
        </td>
      </tr>
    ));

  return <tbody className={classes.table__body}>{tendersRow}</tbody>;
};

export default TableBody;
