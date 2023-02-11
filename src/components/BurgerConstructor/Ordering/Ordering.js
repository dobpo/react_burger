import React from 'react';

import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './Ordering.module.scss';

const Ordering = () => {

  return (
    <div className={`${styles.ordering} mt-10`}>
      <div className={`${styles.cost} mr-10`}>
        <div className="mr-1">
          500
        </div>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
      >
        Оформить заказ
      </Button>
    </div>
  )
};

export default Ordering;
