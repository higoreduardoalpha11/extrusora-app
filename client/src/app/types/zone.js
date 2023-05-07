import * as yup from 'yup';

export const zoneSchema = yup.object().shape({
  zoneType: yup.string().required('Este campo é obrigatório'),
  temperature: yup.number().required('Este campo é obrigatório'),
  pressure: yup.number().required('Este campo é obrigatório'),
  power: yup.number().required('Este campo é obrigatório'),
});

export const zoneInitialValues = {
  zoneType: '',
  temperature: '',
  pressure: '',
  power: '',
}