import PropTypes from 'prop-types';

import { Icon, Button } from '@/app/components';

import './index.css';

const Card = (props) => {
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
  children: PropTypes.element,
}
export default Card;