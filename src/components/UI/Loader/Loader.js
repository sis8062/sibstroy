import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.loader__spinner}></div>
      <p className={classes.loader__text}>Загрузка...</p>
    </div>
  );
};

export default Loader;
