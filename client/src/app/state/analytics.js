import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  temperatures: [],
  pressures: [],
  powers: [],
  rates: [],
  logs: [],
}

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    handleChangeTemperatures: (state, action) => {
      state.temperatures = action.payload.temperatures;
    },
    handleChangePressures: (state, action) => {
      state.pressures = action.payload.pressures;
    },
    handleChangePowers: (state, action) => {
      state.powers = action.payload.powers;
    },
    handleChangeRates: (state, action) => {
      state.rates = action.payload.rates;
    },
    handleChangeLogs: (state, action) => {
      state.logs = action.payload.logs;
    },
    handleClearTemperatures: state => {
      state.temperatures = [];
    },
    handleClearPressures: state => {
      state.pressures = [];
    },
    handleClearPowers: state => {
      state.powers = [];
    },
    handleClearRates: state => {
      state.rates = [];
    },
    handleClearLogs: state => {
      state.logs = [];
    },
  }
});
export const {
  handleChangeTemperatures,
  handleChangePressures,
  handleChangePowers,
  handleChangeRates,
  handleChangeLogs,
  handleClearTemperatures,
  handleClearPressures,
  handleClearPowers,
  handleClearRates,
  handleClearLogs,
} = analyticsSlice.actions;
export default analyticsSlice.reducer;