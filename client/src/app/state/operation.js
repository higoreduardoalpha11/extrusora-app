import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emergencyButton: false,
  extruderButton: false,
  rateButton: false,
  entryButton: false,
  mixButton: false,
  dosageButton: false,
}

export const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    handleChangeEmergencyButton: state => {
      if (state.emergencyButton) {
        state.emergencyButton = false;
        state.extruderButton = false;
        state.rateButton = false;
        state.entryButton = false;
        state.mixButton = false;
        state.dosageButton = false;
      } else {
        state.emergencyButton = true;
      }
    },
    handleChangeExtruderButton: state => {
      if (state.extruderButton) {
        state.extruderButton = false;
        state.rateButton = false;
        state.entryButton = false;
        state.mixButton = false;
        state.dosageButton = false;
      } else {
        state.extruderButton = true;
      }
    },
    handleChangeRateButton: state => {
      state.rateButton = !state.rateButton;
    },
    handleChangeEntryButton: state => {
      state.entryButton = !state.entryButton;
    },
    handleChangeMixButton: state => {
      state.mixButton = !state.mixButton;
    },
    handleChangeDosageButton: state => {
      state.dosageButton = !state.dosageButton;
    },
  }
});
export const {
  handleChangeEmergencyButton,
  handleChangeExtruderButton,
  handleChangeRateButton,
  handleChangeEntryButton,
  handleChangeMixButton,
  handleChangeDosageButton,
} = operationSlice.actions;
export default operationSlice.reducer;