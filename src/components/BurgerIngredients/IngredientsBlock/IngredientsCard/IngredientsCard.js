import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './IngredientsCard.module.scss';
const ingredientsCard = ({ image, price, name }) => {

  return (
    <div className={`${styles.card} mt-6 pb-6`}>
      <div className={styles.img}>
        <Counter count={1} size="default" extraClass={styles.counter} />
        <img src={image} alt={name} />
      </div>
      <div className={`${styles.price} mt-1`}>
        <div className="mr-1">
          {price}
        </div>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.name} mt-1`}>
        {name}
      </div>
    </div>
  )
};

export default ingredientsCard;
