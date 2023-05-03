import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { MdReport, MdCheckCircle, MdClose } from 'react-icons/md';

import './index.css';

const Icon = ({ type }) => {
  switch (type) {
    case 'error':
      return (<MdReport />)
    case 'success':
      return (<MdCheckCircle />);
    case 'close':
      return (<MdClose />);
    default:
      return (<MdCheckCircle />);
  }
}
Icon.propTypes = { type: PropTypes.string }

const Toast = ({ message, setMessage }) => {
  const closeMessage = () => setMessage(null);

  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  }, [message]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`toast toast-${message?.type} ${message ? 'active' : ''} flex flex-row flex-start gap-20`}>
      <div className="toast--icon flex flex-center">
        <Icon type={message?.type} />
      </div>

      <div className="toast--message flex flex-col">
        <span>{message?.title}</span>
        <small>{message?.message}</small>
      </div>

      <button
        type="button"
        onClick={closeMessage}
        className="toast--close"
      >
        <Icon type="close" />
      </button>
    </div>
  )
}
Toast.propTypes = {
  message: PropTypes.object,
  setMessage: PropTypes.func.isRequired,
}
export default Toast;