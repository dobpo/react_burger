import PropTypes from 'prop-types';

import styles from './OrderDetails.module.scss';

import img from '../../../images/done.png';

const OrderDetails = ({ orderId }) => {
  return (
    <div className={styles.order}>
      <span className={`${styles.orderid} text text_type_digits-large mt-20`}>{orderId}</span>
      <span className="text text_type_main-medium mt-8">идентификатор заказа</span>
      <img className="mt-15" src={img} alt="подтверждение заказа" />
      <span className="text text_type_main-small mt-15">Ваш заказ начали готовить</span>
      <span className="text text_type_main-small text_color_inactive mt-2 mb-38">Дождитесь готовности на орбитальной станции</span>
    </div>
  )
};

OrderDetails.propTypes = {
  orderId: PropTypes.string.isRequired
};

export default OrderDetails;
