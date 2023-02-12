import styles from './IngredientDetails.module.scss';

const IngredientDetails = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image_large} alt={props.name}/>
      <p className="text text_type_main-medium">{props.name}</p>
      <div className={styles.values}>
        <div className={`${styles.item} text_type_main-small text_color_inactive`}>
          <span>Калории, ккал</span>
          <span>{props.calories}</span>
        </div>
        <div className={`${styles.item} text_type_main-small text_color_inactive`}>
          <span>Белки, г</span>
          <span>{props.proteins}</span>
        </div>
        <div className={`${styles.item} text_type_main-small text_color_inactive`}>
          <span>Жиры, г</span>
          <span>{props.fat}</span>
        </div>
        <div className={`${styles.item} text_type_main-small text_color_inactive`}>
          <span>Углеводы, г</span>
          <span>{props.carbohydrates}</span>
        </div>
      </div>
    </div>
  )
};

export default IngredientDetails;
