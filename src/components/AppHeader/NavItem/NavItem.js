import React from 'react';

import styles from './NavItem.module.scss';

const NavItem = ({ logo, text }) => (
  <a className={`pl-5 pr-5 ${styles.nav}`} href="/#">
    {logo}
    <span className="text text_type_main-default ml-1">{text}</span>
  </a>
)

export default NavItem;
