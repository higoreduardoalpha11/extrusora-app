import PropTypes from 'prop-types';
import {
  MdReport,
  MdCheckCircle,
  MdClose,
  MdSettingsApplications,
  MdShutterSpeed,
  MdWbTwighlight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';

const Icon = ({ icon }) => {
  switch (icon) {
    case 'error':
      return (<MdReport />)
    case 'success':
      return (<MdCheckCircle />);
    case 'close':
      return (<MdClose />);
    case 'settings':
      return (<MdSettingsApplications />);
    case 'speed':
      return (<MdShutterSpeed />);
    case 'lamp':
      return (<MdWbTwighlight />);
    case 'arrow-down':
      return (<MdKeyboardArrowDown />);
    case 'arrow-up':
        return (<MdKeyboardArrowUp />);
    default:
      return null;
  }
}
Icon.propTypes = {
  icon: PropTypes.string,
}
export default Icon;