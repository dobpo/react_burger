import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from './ModalOverlay/ModalOverlay';

import styles from './Modal.module.scss';

const Modal = ({ handleClose, title, children }) => {
  useEffect(() => {
    const close = e => (e.key === 'Escape' ? handleClose() : null);

    document.body.addEventListener("keydown", close);
    return () => {
      document.body.removeEventListener("keydown", close);
    };
  }, [handleClose]);

  return createPortal(
    <>
      <ModalOverlay handleClose={handleClose} />
      <div className={styles.modal}>
        <div className={`${styles.header} mt-10`}>
          {
            title && (
              <h2 className={`${styles.title} text text_type_main-large ml-10`}>{title}</h2>
            )
          }
          <div
            onClick={handleClose}
            id="close-btn"
            className={`${styles.close} mr-10`}
          >
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('modal')
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.object.isRequired
};

export default Modal;
