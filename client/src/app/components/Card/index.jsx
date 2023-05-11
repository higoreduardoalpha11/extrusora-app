import PropTypes from 'prop-types';

import { Icon, Button } from '@/app/components';
import './index.css';
import { useSelector } from 'react-redux';

const Card = (props) => {
  const { setting } = useSelector((state) => state);
  const { emergencyButton, extruderButton } = useSelector((state) => state.operation);
  const isNonSettings = Object.keys(setting).map((item) => setting[item] !== '').includes(false);
  const isNonDisable = props.isPower ? emergencyButton && !isNonSettings : emergencyButton && extruderButton;

  return (
    <article className="card flex flex-row flex-start gap-20 p-20 bg-bg-light border-radius-lg">
      <div className="card--icon">
        <Icon icon={props.icon} />
      </div>

      <div className="card--content flex flex-col gap-5 full-width">
        <p className="flex flex-row flex-between pb-10">
          <span className="font-base text-light-green">{props.title}</span>

          <Button
            type="button"
            title={props.isOn ? 'Ligado' : 'Desligado'}
            content={props.isOn ? 'On' : 'Off'}
            color={props.isOn ? 'success' : 'none'}
            handleOnClick={props.handleOnClick}
            isDisable={!isNonDisable}
          />
        </p>

        {props.children}
      </div>
    </article>
  )
}
Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  isPower: PropTypes.bool,
  children: PropTypes.element,
}
export default Card;