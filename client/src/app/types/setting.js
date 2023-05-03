import * as yup from 'yup';

export const settingSchema = yup.object().shape({
  limitTemperature: yup.number().required('Este campo é obrigatório'),
  limitPressure: yup.number().required('Este campo é obrigatório'),
  intervalRotation: yup.number().required('Este campo é obrigatório'),
  intervalEntryPower: yup.number().required('Este campo é obrigatório'),
  intervalMixPower: yup.number().required('Este campo é obrigatório'),
  intervalDosagePower: yup.number().required('Este campo é obrigatório'),
  intervalPersistanceData: yup.number().required('Este campo é obrigatório'),
});