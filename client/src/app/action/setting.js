import {
  handleChangeSetting as settingHandleChangeSetting,
  handleClearSetting as settingHandleClearSetting
} from '@/app/state/setting';

export const handleChangeSetting = (data, cb) => {
  const {
    limitTemperature,
    limitPressure,
    intervalRotation,
    intervalEntryPower,
    intervalMixPower,
    intervalDosagePower,
    intervalPersistanceData,
  } = data;

  return async function (dispatch) {
    dispatch(
      settingHandleChangeSetting({
        limitTemperature: limitTemperature,
        limitPressure: limitPressure,
        intervalRotation: intervalRotation,
        intervalEntryPower: intervalEntryPower,
        intervalMixPower: intervalMixPower,
        intervalDosagePower: intervalDosagePower,
        intervalPersistanceData: intervalPersistanceData,
      })
    );

    const message = {
      type: 'success',
      title: 'Configurações',
      message: 'salvas com sucesso',
    }
    cb(message);
  }
}

export const handleClearSetting = () => {
  return function (dispatch) {
    dispatch(
      settingHandleClearSetting()
    );

    return {
      type: 'success',
      title: 'Configurações',
      message: 'resetadas com sucesso',
    }
  }
}