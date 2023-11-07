import { useState } from "react";

import classes from "./TendersTable.module.scss";

import TenderDetail from "../TenderDetail/TenderDetail";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ tenders }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTender, setSelectedTender] = useState();

  const showModalHandler = (show, id) => {
    setSelectedTender(tenders[id]);
    setShowModal(show);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <table className={classes.table}>
        <caption className={classes.table__caption}>Тендеры</caption>
        <TableHead />
        <TableBody tenders={tenders} onShow={showModalHandler} />
      </table>

      {/* Modal via Portal */}
      {showModal && (
        <TenderDetail tender={selectedTender} onClose={closeModalHandler} />
      )}
    </>
  );
};

export default Table;
