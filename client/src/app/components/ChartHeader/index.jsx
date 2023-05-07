import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import {
  MdDeviceThermostat,
  MdAssessment,
  MdFlashOn,
  MdShutterSpeed,
} from 'react-icons/md';

import eventBus from '@/app/utils/eventBus';
import { Analytics } from '@/app/action';

const ChartHeader = ({ target, startDate, setStartDate }) => {
  const dispatch = useDispatch();

  const getTemperaturesData = async () => {
    dispatch(
      Analytics.handleChangeTemperatures(dayjs(startDate).format('YYYY-MM-DD'), (message) => {
        if (message) eventBus.dispatch('toast', message);
      })
    )
  }

  const getPressuresData = async () => {
    dispatch(
      Analytics.handleChangePressures(dayjs(startDate).format('YYYY-MM-DD'), (message) => {
        if (message) eventBus.dispatch('toast', message);
      })
    )
  }

  const getPowersData = async () => {
    dispatch(
      Analytics.handleChangePowers(dayjs(startDate).format('YYYY-MM-DD'), (message) => {
        if (message) eventBus.dispatch('toast', message);
      })
    )
  }

  const getRatesData = async () => {
    dispatch(
      Analytics.handleChangeRates(dayjs(startDate).format('YYYY-MM-DD'), (message) => {
        if (message) eventBus.dispatch('toast', message);
      })
    )
  }

  useEffect(() => {
    if (target === 'temperatures') getTemperaturesData();
    else if (target === 'pressures') getPressuresData();
    else if (target === 'powers') getPowersData();
    else if (target === 'rates') getRatesData();
  }, [startDate]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-between flex-wrap gap-20">
      {
        target === 'temperatures' && (
          <span className="flex flex-row flex-start gap-30 font-sm">
            <MdDeviceThermostat style={{ fontSize: 50 }} />
            Níveis de temperatura
          </span>
        )
      }

      {
        target === 'pressures' && (
          <span className="flex flex-row flex-start gap-30 font-sm">
            <MdAssessment style={{ fontSize: 50 }} />
            Níveis de pressão
          </span>
        )
      }

      {
        target === 'powers' && (
          <span className="flex flex-row flex-start gap-30 font-sm">
            <MdFlashOn style={{ fontSize: 50 }} />
            Níveis de potência
          </span>
        )
      }

      {
        target === 'rates' && (
          <span className="flex flex-row flex-start gap-30 font-sm">
            <MdShutterSpeed style={{ fontSize: 50 }} />
            Níveis de vazão
          </span>
        )
      }

      <label className="flex flex-row gap-10 flex-center text-white">
        Data
        <DatePicker
          locale={ptBR}
          showIcon
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="bg-bg-dark text-white border-radius-sm"
        />
      </label>
    </div>
  )
}
ChartHeader.propTypes = {
  target: PropTypes.string.isRequired,
  startDate: PropTypes.any,
  setStartDate: PropTypes.func,
}
export default ChartHeader;