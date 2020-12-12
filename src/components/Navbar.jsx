import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [menuBurger, setMenuBurger] = useState(false);

  const toggleMenuHandler = () => setMenuBurger((prevState) => !prevState);
  const closeMenuHandler = () => setMenuBurger(false);

  return (
    <nav className="navbar">
      <i onClick={toggleMenuHandler} className={menuBurger ? 'fas fa-times' : 'fas fa-bars'}></i>
      <div className="navbar__brand">Note App</div>
      <ul className={menuBurger ? 'navbar__nav nav-menu-burger' : 'navbar__nav'}>
        <li onClick={closeMenuHandler} className="nav__item">
          <NavLink exact to="/">
            Главная
          </NavLink>
        </li>
        <li onClick={closeMenuHandler} className="nav__item">
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </nav>
  );
};
