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
      state.limitTemperature = action.limitTemperature;
      state.limitPressure = action.limitPressure;
      state.intervalRotation = action.intervalRotation;
      state.intervalEntryPower = action.intervalEntryPower;
      state.intervalMixPower = action.intervalMixPower;
      state.intervalDosagePower = action.intervalDosagePower;
      state.intervalPersistanceData = action.intervalPersistanceData;
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