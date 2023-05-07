import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  temperatures: [],
  pressures: [],
  powers: [],
  rates: [],
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
  }
});
export const {
  handleChangeTemperatures,
  handleChangePressures,
  handleChangePowers,
  handleChangeRates,
  handleClearTemperatures,
  handleClearPressures,
  handleClearPowers,
  handleClearRates,
} = analyticsSlice.actions;
export default analyticsSlice.reducer;