import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";

import logo from "../../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const openMenu = () => {
    setIsActive(true);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <header className={classes.header}>
      <button className={classes.header__menu_open} onClick={openMenu}>
        <svg
          className={classes.header__icon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </button>
      <NavLink className={classes.header__logo} to="/">
        <img src={logo} alt="Company logo" />
      </NavLink>
      <nav
        className={
          isActive
            ? `${classes.header__nav} ${classes.active}`
            : classes.header__nav
        }
      >
        <ul className={classes.header__list}>
          <li className={classes.header__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.header__link_active : classes.header__link
              }
              to="/"
              onClick={closeMenu}
            >
              Тендеры
            </NavLink>
          </li>
          <li className={classes.header__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.header__link_active : classes.header__link
              }
              to="instruction"
              onClick={closeMenu}
            >
              Инструкция
            </NavLink>
          </li>
          <li className={classes.header__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.header__link_active : classes.header__link
              }
              to="about"
              onClick={closeMenu}
            >
              О компании
            </NavLink>
          </li>
        </ul>
        <button className={classes.header__menu_close} onClick={closeMenu}>
          <svg
            className={classes.header__icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
