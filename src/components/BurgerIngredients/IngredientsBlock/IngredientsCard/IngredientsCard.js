import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Counter,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../../../Modal/Modal';
import IngredientDetails from './IngredientDetails/IngredientDetails'

import styles from './IngredientsCard.module.scss';

const IngredientsCard = (
  { name, image, price, image_large, calories, proteins, fat, carbohydrates }
) => {
  const [isModal, setIsModal] = useState(false);

  const ingredientDetail = {
    name,
    image_large,
    calories,
    proteins,
    fat,
    carbohydrates
  };

  const handleClose = () => {
    setIsModal(false);
  };

  const handleOpen = () => {
    setIsModal(true);
  };

  return (
    <>
      <div
        className={`${styles.card} mt-6 pb-6`}
        onClick={handleOpen}
      >
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
      {
        isModal && (
          <Modal handleClose={handleClose} title={"Детали ингредиента"}>
            <IngredientDetails {...ingredientDetail} />
          </Modal>
        )
      }
    </>
  )
};

IngredientsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.number.isRequired,
  image_large: PropTypes.string,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired
};

export default IngredientsCard;
