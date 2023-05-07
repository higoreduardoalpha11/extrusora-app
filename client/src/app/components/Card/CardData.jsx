import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import eventBus from '@/app/utils/eventBus';
import { Analytics } from '@/app/action';
import { zoneInitialValues, zoneSchema } from '@/app/types/zone';
import { Icon, Input, Button } from '@/app/components';
import './index.css';

const CardData = ({ icon, zoneType }) => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values, onSubmitProps) => {
    eventBus.dispatch('loader', true);
    dispatch(
      Analytics.handleSaveDada(values, (message) => {
        if (message) eventBus.dispatch('toast', message);
        eventBus.dispatch('loader', false);
        onSubmitProps.resetForm();
      })
    )
  }

  return (
    <article className="card flex flex-row flex-start gap-20 p-20 bg-bg-light border-radius-lg">
      <div className="card--icon">
        <Icon icon={icon} />
      </div>

      <div className="card--content full-width">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={{ ...zoneInitialValues, zoneType }}
          validationSchema={zoneSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 full-width">
              <h6 className="font-regular text-white py-10">
                {
                  zoneType === 'entry'
                    ? 'Alimentação' : zoneType === 'mix'
                      ? 'Mistura' : 'Dosagem'
                }
              </h6>

              <input type="hidden" id="zoneType" name="zoneType" value={values.zoneType} onChange={handleChange} />

              <Input
                type="number"
                id="temperature"
                name="temperature"
                label="Temperatura (°C)"
                placeholder="Temperatura obtida (°C)"
                value={values.temperature}
                handleOnChange={handleChange}
                error={Boolean(touched.temperature) && Boolean(errors.temperature)}
                helperText={touched.temperature && errors.temperature}
              />

              <Input
                type="number"
                id="pressure"
                name="pressure"
                label="Pressão (MPa)"
                placeholder="Pressão obtida (MPa)"
                value={values.pressure}
                handleOnChange={handleChange}
                error={Boolean(touched.pressure) && Boolean(errors.pressure)}
                helperText={touched.pressure && errors.pressure}
              />

              <Input
                type="number"
                id="power"
                name="power"
                label="Potência (kW)"
                placeholder="Potência obtida (kW)"
                value={values.power}
                handleOnChange={handleChange}
                error={Boolean(touched.power) && Boolean(errors.power)}
                helperText={touched.power && errors.power}
              />

              <Button
                type="submit"
                title="Salvar dados"
                content="Salvar dados"
                color="white"
              />
            </form>
          )}
        </Formik>
      </div>
    </article>
  )
}
CardData.propTypes = {
  icon: PropTypes.string.isRequired,
  zoneType: PropTypes.string.isRequired,
}
export default CardData;