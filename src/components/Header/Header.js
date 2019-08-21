import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Icon from '../Icon/Icon';

function Header() {
  return (
    <header>
      <div className={classes.header_top}>
        <div>Main/Home</div>
        <div>Contact us/Email</div>
        <div>language</div>
        <div>Currency</div>
        <div>
          <Icon icon="Logo" width="96" height="96" />
          {/* <img scr="#" alt="Logo" /> */}
        </div>
        <div>Login</div>
        <div>Register</div>
        <div>Marks</div>
        <div>Comparison</div>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </nav>
      </div>
      <div className={classes.header_middle}>
        <div>Searching</div>
        <div>Cart</div>
      </div>
      <div className={classes.header_bottom}>
        <ul className={classes.nav_list}>
          <li>
            <NavLink href="#" className={classes.nav_link}>
              Категории
            </NavLink>
            <ul className={classes.nav_item_list}>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  Красивое тело
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  Дела душевные
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  Довольные лица
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  Пляж
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  Умные подарки
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="#" className={classes.nav_link}>
              Красивое тело
            </NavLink>
            <ul className={classes.nav_item_list}>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 1
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 2
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 3
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="#" className={classes.nav_link}>
              Дела душевные
            </NavLink>
            <ul className={classes.nav_item_list}>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 1
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 2
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 3
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="#" className={classes.nav_link}>
              Довольные лица
            </NavLink>
            <ul className={classes.nav_item_list}>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 1
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 2
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 3
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="#" className={classes.nav_link}>
              Пляж
            </NavLink>
            <ul className={classes.nav_item_list}>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 1
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 2
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 3
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="#" className={classes.nav_link}>
              Умные подарки
            </NavLink>
            <ul className={classes.nav_item_list}>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 1
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 2
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className={classes.item_link}>
                  № 3
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="#" className={classes.nav_link}>
              Информация
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
