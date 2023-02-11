import React from 'react';

import IngredientsCard from './IngredientsCard/IngredientsCard';

import styles from './IngredientsBlock.module.scss';

const IngredientsBlock = ({ title, ingredients }) => {

  return (
    <div className="mt-6">
      <h2 className="text text_type_main-medium" ref={ingredients.ref}>{title}</h2>
      <div className={styles.ingredients}>
        {
          ingredients.map((ingredient) =>
            <IngredientsCard key={ingredient._id} {...ingredient} />
          )
        }
      </div>
    </div>
  )
};

export default IngredientsBlock;
