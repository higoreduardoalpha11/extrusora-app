import PropTypes from 'prop-types';

import './index.css';

const Input = ({ type, id, name, label, placeholder, value, handleOnChange, error, helperText, isDisabled }) => {
  return (
    <div className="input">
      <div className={`input--box flex flex-row flex-start gap-5 ${error ? 'error' : ''}`}>
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => handleOnChange(e)}
          onFocus={(e) => e.target.parentElement.classList.toggle('focus')}
          onBlur={(e) => e.target.parentElement.classList.toggle('focus')}
          disabled={isDisabled}
        />

        <label htmlFor={id}>{label}</label>
      </div>

      {
        error && (
          <span className="input--error">
            {helperText}
          </span>
        )
      }
    </div>
  )
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Input;