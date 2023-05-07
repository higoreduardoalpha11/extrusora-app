import api from '@/app/lib/axios';
import { errorHadling, successHandling } from './responseHandling';
import {
  handleChangeTemperatures as analyticsHandleChangeTemperatures,
  handleChangePressures as analyticsHandleChangePressures,
  handleChangePowers as analyticsHandleChangePowers,
  handleChangeRates as analyticsHandleChangeRates,
  handleChangeLogs as analyticsHandleChangeLogs,
  handleClearLogs,
} from '@/app/state/analytics';
import calculateRatesWithPowers from '@/app/utils/calculateRatesWithPowers';

export const handleSaveDada = (data, cb) => {
  return async function () {
    let message = null;

    await api.post('/zones', data)
      .then(() => message = successHandling('Cadastro'))
      .catch((err) => message = errorHadling(err));

    cb(message);
  }
}

export const handleChangeTemperatures = (date, cb) => {
  return async function (dispatch) {
    let message = null;

    await api.get(`/zones/temperatures?date=${date}`)
      .then((res) => {
        dispatch(
          analyticsHandleChangeTemperatures({
            temperatures: res.data,
          })
        );
      })
      .catch((err) => message = errorHadling(err));

    cb(message);
  }
}

export const handleChangePressures = (date, cb) => {
  return async function (dispatch) {
    let message = null;

    await api.get(`/zones/pressures?date=${date}`)
      .then((res) => {
        dispatch(
          analyticsHandleChangePressures({
            pressures: res.data,
          })
        );
      })
      .catch((err) => message = errorHadling(err));

    cb(message);
  }
}

export const handleChangePowers = (date, cb) => {
  return async function (dispatch) {
    let message = null;

    await api.get(`/zones/powers?date=${date}`)
      .then((res) => {
        dispatch(
          analyticsHandleChangePowers({
            powers: res.data,
          })
        );
      })
      .catch((err) => message = errorHadling(err));

    cb(message);
  }
}

export const handleChangeRates = (date, cb) => {
  return async function (dispatch) {
    let message = null;

    await api.get(`/zones/powers?date=${date}`)
      .then((res) => {
        dispatch(
          analyticsHandleChangeRates({
            rates: calculateRatesWithPowers(res.data),
          })
        );
      })
      .catch((err) => message = errorHadling(err));

    cb(message);
  }
}

export const handleChangeLogs = (cb) => {
  return async function (dispatch) {
    let message = null;

    await api.get('/logs')
      .then((res) => {
        dispatch(
          analyticsHandleChangeLogs({
            logs: res.data,
          })
        );
      })
      .catch((err) => message = errorHadling(err));

    cb(message);
  }
}

export const handleToggleVisibleNotification = (id, cb) => {
  return async function (dispatch) {
    let message = null;

    await api.patch(`/logs/visible/${id}`)
      .then((res) => {
        dispatch(analyticsHandleChangeLogs({
          logs: res.data,
        }));
      })
      .catch((err) => message = errorHadling(err));

    cb(message);
  }
}

export const handleDeleteLogs = (cb) => {
  return async function (dispatch) {
    let message = null;

    await api.delete('/logs')
      .then(() => {
        dispatch(handleClearLogs());
        message = successHandling('Exclusão');
      })
      .catch((err) => message = errorHadling(err));

    cb(message);
  }
}