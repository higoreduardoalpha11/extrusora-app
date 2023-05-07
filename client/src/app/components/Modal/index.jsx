import PropTypes from 'prop-types';

import eventBus from '@/app/utils/eventBus';
import { Icon, Button } from '@/app/components';

import './index.css';

const Modal = ({ message, color, icon, setModal, cb, target }) => {
  return (
    <div className="modal-dialog flex flex-center">
      <div className="modal-dialog--wrapper flex flex-col gap-30">
        <span className={`modal-dialog--wrapper-icon icon-${color} flex flex-center`}>
          <Icon icon={icon} />
        </span>

        <div className="modal-dialog--wrapper-content">
          <h4>Tem certeza disso?</h4>
          <span>Você realmente quer {message}?</span>
        </div>

        <div className="modal-dialog--wrapper-button-group flex flex-wrap gap-10 flex-center">
          <Button
            type="button"
            title="Cancelar"
            content="NÃO, FECHAR"
            color="white"
            handleOnClick={() => setModal(null)}
          />

          <Button
            type="button"
            title="Confirmar"
            content="SIM, EXCLUIR"
            color="danger"
            handleOnClick={() => {
              setModal(null);
              eventBus.dispatch('loader', true);
              cb(target);
            }}
          />
        </div>
      </div>
    </div>
  )
}
Modal.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  setModal: PropTypes.func.isRequired,
  cb: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
}
export default Modal;