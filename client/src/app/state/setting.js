import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  limitTemperature: '',
  limitPressure: '',
  intervalRotation: '',
  intervalEntryPower: '',
  intervalMixPower: '',
  intervalDosagePower: '',
  intervalPersistanceData: '',
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    handleChangeSetting: (state, action) => {
      state.limitTemperature = action.payload.limitTemperature;
      state.limitPressure = action.payload.limitPressure;
      state.intervalRotation = action.payload.intervalRotation;
      state.intervalEntryPower = action.payload.intervalEntryPower;
      state.intervalMixPower = action.payload.intervalMixPower;
      state.intervalDosagePower = action.payload.intervalDosagePower;
      state.intervalPersistanceData = action.payload.intervalPersistanceData;
    },
    handleClearSetting: state => {
      state.limitTemperature = '';
      state.limitPressure = '';
      state.intervalRotation = '';
      state.intervalEntryPower = '';
      state.intervalMixPower = '';
      state.intervalDosagePower = '';
      state.intervalPersistanceData = '';
    },
  }
});
export const { handleChangeSetting, handleClearSetting } = settingSlice.actions;
export default settingSlice.reducer;