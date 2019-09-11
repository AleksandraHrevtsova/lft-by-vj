import React from 'react';
import classes from './Header.module.css';
import Icon from '../Icon/Icon';

function Header() {
  return (
    <header>
      <div className={classes.header_top}>
        <div>Main/Home</div>
        <div className={classes.font1}>Email</div>
        <div>language</div>
        <div className={classes.font1}>Currency</div>
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
        <h1 className={classes.font1}>Vetkasova по-русски</h1>
        <div>Cart</div>
      </div>
      <div className={classes.header_bottom}>
        <h1 className={classes.font1}>Vetkasova по-русски</h1>
        <h1 className={classes.font2}>Vetkasova по-русски</h1>
        <h1 className={classes.font3}>Vetkasova по-русски</h1>
        <h1 className={classes.font4}>Vetkasova по-русски</h1>
        <h1 className={classes.font5}>Vetkasova по-русски</h1>
        <h1 className={classes.font6}>Vetkasova по-русски</h1>
        <h1 className={classes.font7}>Vetkasova по-русски</h1>
        <h1 className={classes.font8}>Vetkasova по-русски</h1>
        <h1 className={classes.font9}>Vetkasova по-русски</h1>
        <h1 className={classes.font10}>Vetkasova по-русски</h1>
        <h1 className={classes.font11}>Vetkasova по-русски</h1>
        <h1 className={classes.font12}>Vetkasova по-русски</h1>
        <h1 className={classes.font13}>Vetkasova по-русски</h1>
        <h1 className={classes.font14}>Vetkasova по-русски</h1>
        <h1 className={classes.font15}>Vetkasova по-русски</h1>

        <h1 className={classes.font16}>Vetkasova по-русски</h1>
        <h1 className={classes.font17}>Vetkasova по-русски</h1>
        <h1 className={classes.font18}>Vetkasova по-русски</h1>
        <h1 className={classes.font19}>Vetkasova по-русски</h1>
        <h1 className={classes.font20}>Vetkasova по-русски</h1>
        <h1 className={classes.font21}>Vetkasova по-русски</h1>
        <h1 className={classes.font22}>Vetkasova по-русски</h1>
        <h1 className={classes.font23}>Vetkasova по-русски</h1>
        <h1 className={classes.font24}>Vetkasova по-русски</h1>
        <h1 className={classes.font25}>Vetkasova по-русски</h1>
        <h1 className={classes.font26}>Vetkasova по-русски</h1>
        <h1 className={classes.font27}>Vetkasova по-русски</h1>
        <h1 className={classes.font28}>Vetkasova по-русски</h1>
        <h1 className={classes.font29}>Vetkasova по-русски</h1>
        <h1 className={classes.font30}>Vetkasova по-русски</h1>
        <h1 className={classes.font31}>Vetkasova по-русски</h1>
        <h1 className={classes.font32}>Vetkasova по-русски</h1>
      </div>
      {/* <div className={classes.header_bottom}>
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
      </div> */}
    </header>
  );
}

export default Header;
