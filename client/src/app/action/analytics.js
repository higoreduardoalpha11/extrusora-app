import api from '@/app/lib/axios';
import { errorHadling } from './responseHandling';
import {
  handleChangeTemperatures as analyticsHandleChangeTemperatures,
} from '@/app/state/analytics';

export const handleChangeTemperatures = (date, cb) => {
  return async function (dispatch) {
    let message = null;

    await api.get(`/zones/temperature?date=${date}`)
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