import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rateRotation: 0,
  rate: 0,
  entryTemperature: 0,
  entryPressure: 0,
  entryPower: 0,
  mixTemperature: 0,
  mixPressure: 0,
  mixPower: 0,
  dosageTemperature: 0,
  dosagePressure: 0,
  dosagePower: 0,
}

export const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    handleChangeRateRotation: (state, action) => {
      state.rateRotation = action.payload.rateRotation;
    },
    handleChangeRate: (state, action) => {
      state.rate = action.payload.rate;
    },
    handleChangeEntryTemperature: (state, action) => {
      state.entryTemperature = action.payload.entryTemperature;
    },
    handleChangeEntryPressure: (state, action) => {
      state.entryPressure = action.payload.entryPressure;
    },
    handleChangeEntryPower: (state, action) => {
      state.entryPower = action.payload.entryPower;
    },
    handleChangeMixTemperature: (state, action) => {
      state.mixTemperature = action.payload.mixTemperature;
    },
    handleChangeMixPressure: (state, action) => {
      state.mixPressure = action.payload.mixPressure;
    },
    handleChangeMixPower: (state, action) => {
      state.mixPower = action.payload.mixPower;
    },
    handleChangeDosageTemperature: (state, action) => {
      state.dosageTemperature = action.payload.dosageTemperature;
    },
    handleChangeDosagePressure: (state, action) => {
      state.dosagePressure = action.payload.dosagePressure;
    },
    handleChangeDosagePower: (state, action) => {
      state.dosagePower = action.payload.dosagePower;
    },
  }
});

export const {
  handleChangeRateRotation,
  handleChangeRate,
  handleChangeEntryTemperature,
  handleChangeEntryPressure,
  handleChangeEntryPower,
  handleChangeMixTemperature,
  handleChangeMixPressure,
  handleChangeMixPower,
  handleChangeDosageTemperature,
  handleChangeDosagePressure,
  handleChangeDosagePower,
} = controlSlice.actions;
export default controlSlice.reducer;