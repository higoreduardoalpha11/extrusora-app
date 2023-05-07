import api from '@/app/lib/axios';
import { errorHadling } from './responseHandling';
import {
  handleChangeTemperatures as analyticsHandleChangeTemperatures,
  handleChangePressures as analyticsHandleChangePressures,
  handleChangePowers as analyticsHandleChangePowers,
  handleChangeRates as analyticsHandleChangeRates,
} from '@/app/state/analytics';
import calculateRatesWithPowers from '@/app/utils/calculateRatesWithPowers';

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