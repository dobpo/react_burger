import React from 'react';
import PropTypes from 'prop-types';

import IngredientsCard from './IngredientsCard/IngredientsCard';
import { dataPropTypes } from '../../../utils/propTypes';

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

IngredientsBlock.propTypes = {
  title: PropTypes.string,
  ingredients: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired
};

export default IngredientsBlock;
