import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  temperatures: [],
  pressures: [],
  powers: [],
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
    handleClearTemperatures: state => {
      state.temperatures = [];
    },
    handleClearPressures: state => {
      state.pressures = [];
    },
    handleClearPowers: state => {
      state.powers = [];
    },
  }
});
export const {
  handleChangeTemperatures,
  handleChangePressures,
  handleChangePowers,
  handleClearTemperatures,
  handleClearPressures,
  handleClearPowers,
} = analyticsSlice.actions;
export default analyticsSlice.reducer;