import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.scss';

const Modal = ({ handleClose, title, children }) => {
  return createPortal(
    <>
      <ModalOverlay handleClose={handleClose} />
      <div className={styles.modal}>
        <div className={styles.header}>
          {
            title && (
              <h2>{title}</h2>
            )
          }
          <div
            onClick={handleClose}
            id="close-btn"
            className={styles.close}
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

export default Modal;
