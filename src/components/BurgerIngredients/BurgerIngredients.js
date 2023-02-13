import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientsBlock from './IngredientsBlock/IngredientsBlock';
import { dataPropTypes } from '../../utils/propTypes';

import styles from './BurgerIngredients.module.scss';


const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = useState('buns')

  const buns = useMemo(() =>
    data.filter((item) => item.type === 'bun'),
    [data]
  );
  const sauce = useMemo(() =>
    data.filter((item) => item.type === 'sauce'),
    [data]
  );
  const main = useMemo(() =>
    data.filter((item) => item.type === 'main'),
    [data]
  );

  return (
    <section className={`${styles.ingridients} ml-4`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="mains" active={current === 'mains'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.blocks} pr-4`}>
        <IngredientsBlock title="Булки" ingredients={buns}/>
        <IngredientsBlock title="Соусы" ingredients={sauce}/>
        <IngredientsBlock title="Начинки" ingredients={main}/>
      </div>
    </section>
  )
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired
};

export default BurgerIngredients;
