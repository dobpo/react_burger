import PropTypes from 'prop-types';

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

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default ModalOverlay;
