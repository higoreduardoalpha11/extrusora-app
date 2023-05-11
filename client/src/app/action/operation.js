import {
  handleChangeEmergencyButton as operationHandleChangeEmergencyButton,
  handleChangeExtruderButton as operationHandleChangeExtruderButton,
  handleChangeRateButton as operationHandleChangeRateButton,
  handleChangeEntryButton as operationHandleChangeEntryButton,
  handleChangeMixButton as operationHandleChangeMixButton,
  handleChangeDosageButton as operationHandleChangeDosageButton,
} from '@/app/state/operation';

export const handleChangeEmergencyButton = () => {
  return async function (dispatch) {
    dispatch(
      operationHandleChangeEmergencyButton()
    )
  }
}

export const handleChangeExtruderButton = () => {
  return async function (dispatch) {
    dispatch(
      operationHandleChangeExtruderButton()
    )
  }
}

export const handleChangeRateButton = () => {
  return async function (dispatch) {
    dispatch(
      operationHandleChangeRateButton()
    )
  }
}

export const handleChangeEntryButton = () => {
  return async function (dispatch) {
    dispatch(
      operationHandleChangeEntryButton()
    )
  }
}

export const handleChangeMixButton = () => {
  return async function (dispatch) {
    dispatch(
      operationHandleChangeMixButton()
    )
  }
}

export const handleChangeDosageButton = () => {
  return async function (dispatch) {
    dispatch(
      operationHandleChangeDosageButton()
    )
  }
}