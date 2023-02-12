import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import NavItem from './NavItem/NavItem';

import styles from './AppHeader.module.scss';

const AppHeader = () => {

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.nav}>
        <div className={`${styles.col} ${styles.col_left}`}>
          <NavItem logo={<BurgerIcon />} text='Конструктор' />
          <NavItem logo={<ListIcon />} text='Лента заказов' />
        </div>
        <div className={`${styles.col} ${styles.col_middle}`}>
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className={`${styles.col} ${styles.col_right}`}>
           <NavItem logo={<ProfileIcon />} text='Личный кабинет' />
        </div>
      </nav>
    </header>
  )
};

export default AppHeader;
