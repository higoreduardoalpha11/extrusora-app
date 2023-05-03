import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

const Button = ({ route, type, title, content, color, handleOnClick, isDisable }) => {
  const button = <button
    type={`${type ? type : 'button'}`}
    title={title}
    className={`button button-${color} ${isDisable ? 'button-disable' : ''} flex flex-row flex-center`}
    onClick={handleOnClick}
    disabled={isDisable}
  >
    {content}
  </button>

  if (route) return (<Link to={route}>{button}</Link>)
  return (button)
}
Button.propTypes = {
  route: PropTypes.string,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
  isDisable: PropTypes.bool,
}
export default Button;