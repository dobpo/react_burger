import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import Ordering from './Ordering/Ordering';

import styles from './BurgerConstructor.module.scss';

const BurgerConstructor = ({ data }) => {
  const bun = data.find((item) => item.type === 'bun');
  const ingredients = data.filter(item => item.type !== "bun");

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
        <Ordering />
      </section>
    )
};

export default BurgerConstructor;
