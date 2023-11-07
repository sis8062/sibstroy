import classes from "./TableHead.module.scss";

const TableHead = () => {
  return (
    <thead className={classes.table__head}>
      <tr className={classes.table__row}>
        <th className={classes.table__header}>Предмет тендера</th>
        <th className={classes.table__header}>Тип</th>
        <th className={classes.table__header}>Начало приема заявок</th>
        <th className={classes.table__header}>Окончание приема заявок</th>
      </tr>
    </thead>
  );
};

export default TableHead;
