
import styles from './ModalOverlay.module.scss';
const ModalOverlay = ({ handleClose }) => {
  return (
    <div
      className={styles.overlay}
      id="modal-overlay"
      onClick={handleClose}
    />
  );
}

export default ModalOverlay;
