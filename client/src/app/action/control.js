import {
  handleChangeRateRotation as controlHandleChangeRateRotation,
  handleChangeRate as controlHandleChangeRate,
  handleChangeEntryTemperature as controlHandleChangeEntryTemperature,
  handleChangeEntryPressure as controlHandleChangeEntryPressure,
  handleChangeEntryPower as controlHandleChangeEntryPower,
  handleChangeMixTemperature as controlHandleChangeMixTemperature,
  handleChangeMixPressure as controlHandleChangeMixPressure,
  handleChangeMixPower as controlHandleChangeMixPower,
  handleChangeDosageTemperature as controlHandleChangeDosageTemperature,
  handleChangeDosagePressure as controlHandleChangeDosagePressure,
  handleChangeDosagePower as controlHandleChangeDosagePower,
} from '@/app/state/control';

export const handleChangeRateRotation = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeRateRotation({
        rateRotation: data
      })
    )
  }
}

export const handleChangeRate = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeRate({
        rate: data
      })
    )
  }
}

export const handleChangeEntryTemperature = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeEntryTemperature({
        entryTemperature: data
      })
    )
  }
}

export const handleChangeEntryPressure = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeEntryPressure({
        entryPressure: data
      })
    )
  }
}

export const handleChangeEntryPower = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeEntryPower({
        entryPower: data
      })
    )
  }
}

export const handleChangeMixTemperature = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeMixTemperature({
        mixTemperature: data
      })
    )
  }
}

export const handleChangeMixPressure = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeMixPressure({
        mixPressure: data
      })
    )
  }
}

export const handleChangeMixPower = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeMixPower({
        mixPower: data
      })
    )
  }
}

export const handleChangeDosageTemperature = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeDosageTemperature({
        dosageTemperature: data
      })
    )
  }
}

export const handleChangeDosagePressure = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeDosagePressure({
        dosagePressure: data
      })
    )
  }
}

export const handleChangeDosagePower = (data) => {
  return async function (dispatch) {
    dispatch(
      controlHandleChangeDosagePower({
        dosagePower: data
      })
    )
  }
}