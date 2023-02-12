import { useState } from 'react';
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from '../../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

import styles from './Ordering.module.scss';

const Ordering = ({ price }) => {
  const [isModal, setIsModal] = useState(false);

  const handleClose = () => {
    setIsModal(false);
  };

  const handleOpen = () => {
    setIsModal(true);
  };

  return (
    <>
      <div className={`${styles.ordering} mt-10`}>
        <div className={`${styles.cost} mr-10`}>
          <div className="mr-1">
            {price}
          </div>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOpen}
        >
          Оформить заказ
        </Button>
      </div>
      {
        isModal && (
          <Modal handleClose={handleClose}>
            <OrderDetails orderId="034536" />
          </Modal>
        )
      }
    </>
  )
};

export default Ordering;
