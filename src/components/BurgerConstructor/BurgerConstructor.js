import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import Ordering from './Ordering/Ordering';
import { dataPropTypes } from '../../utils/propTypes';

import styles from './BurgerConstructor.module.scss';

const BurgerConstructor = ({ data }) => {

  const bun = useMemo(() =>
    data.find((item) => item.type === 'bun'),
    [data]
  );
  const ingredients = useMemo(() =>
    data.filter(item => item.type !== 'bun'),
    [data]
  );
  const price = useMemo(() => (
    bun.price * 2 + ingredients.reduce((sum, { price }) => sum + price, 0)),
    [bun, ingredients]
  );

  return (
    <section className={`${styles.section} ml-10`}>
      <div className={`${styles.constructor} ml-10 pl-4 pr-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />

        {
          ingredients.map((ingredient) =>
            <ConstructorElement key={ingredient._id}
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
            />
          )
        }

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <Ordering price={price} />
    </section>
  )
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired
};

export default BurgerConstructor;
