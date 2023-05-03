import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import eventBus from '@/app/utils/eventBus';
import { Setting as ActionSetting } from '@/app/action';
import { Input, Button } from '@/app/components';
import { settingSchema } from '@/app/types/setting';

const Setting = () => {
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state);

  console.log(setting);

  const handleFormSubmit = (values) => {
    // eventBus.dispatch('loader', true);
    dispatch(
      ActionSetting.handleChangeSetting(values, (message) => {
        eventBus.dispatch('loader', false);
        eventBus.dispatch('toast', message);
      })
    )

    // dispatch(
    //   ActionSetting.handleClearSetting()
    // )
  }

  return (
    <section className="setting py-20">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={setting}
        validationSchema={settingSchema}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="container">
            <div className="py-30">
              <h6 className="font-regular text-white py-10">Limites de segurança</h6>
              <div className="grid grid-start grid-3 gap-20">
                <Input
                  type="number"
                  id="limitTemperature"
                  name="limitTemperature"
                  label="Temperatura (°C)"
                  placeholder="Temperatura máxima (°C)"
                  value={values.limitTemperature}
                  handleOnChange={handleChange}
                  error={Boolean(touched.limitTemperature) && Boolean(errors.limitTemperature)}
                  helperText={touched.limitTemperature && errors.limitTemperature}
                />

                <Input
                  type="number"
                  id="limitPressure"
                  name="limitPressure"
                  label="Pressão (MPa)"
                  placeholder="Pressão máxima (MPa)"
                  value={values.limitPressure}
                  handleOnChange={handleChange}
                  error={Boolean(touched.limitPressure) && Boolean(errors.limitPressure)}
                  helperText={touched.limitPressure && errors.limitPressure}
                />
              </div>
            </div>

            <div className="py-30">
              <h6 className="font-regular text-white py-10">Intervalos de controle</h6>
              <div className="grid grid-start grid-3 gap-20">
                <Input
                  type="number"
                  id="intervalRotation"
                  name="intervalRotation"
                  label="Rotação (rpm)"
                  placeholder="Intervalo de rotação (rpm)"
                  value={values.intervalRotation}
                  handleOnChange={handleChange}
                  error={Boolean(touched.intervalRotation) && Boolean(errors.intervalRotation)}
                  helperText={touched.intervalRotation && errors.intervalRotation}
                />

                <Input
                  type="number"
                  id="intervalEntryPower"
                  name="intervalEntryPower"
                  label="Potência alimentação (KW)"
                  placeholder="Intervalo de potência alimentação (KW)"
                  value={values.intervalEntryPower}
                  handleOnChange={handleChange}
                  error={Boolean(touched.intervalEntryPower) && Boolean(errors.intervalEntryPower)}
                  helperText={touched.intervalEntryPower && errors.intervalEntryPower}
                />

                <Input
                  type="number"
                  id="intervalMixPower"
                  name="intervalMixPower"
                  label="Potência mistura (KW)"
                  placeholder="Intervalo de potência mistura (KW)"
                  value={values.intervalMixPower}
                  handleOnChange={handleChange}
                  error={Boolean(touched.intervalMixPower) && Boolean(errors.intervalMixPower)}
                  helperText={touched.intervalMixPower && errors.intervalMixPower}
                />

                <Input
                  type="number"
                  id="intervalDosagePower"
                  name="intervalDosagePower"
                  label="Potência dosagem (KW)"
                  placeholder="Intervalo de potência dosagem (KW)"
                  value={values.intervalDosagePower}
                  handleOnChange={handleChange}
                  error={Boolean(touched.intervalDosagePower) && Boolean(errors.intervalDosagePower)}
                  helperText={touched.intervalDosagePower && errors.intervalDosagePower}
                />

                <Input
                  type="number"
                  id="intervalPersistanceData"
                  name="intervalPersistanceData"
                  label="Intervalo de coleta (min)"
                  placeholder="Intervalo de coleta de dados (min)"
                  value={values.intervalPersistanceData}
                  handleOnChange={handleChange}
                  error={Boolean(touched.intervalPersistanceData) && Boolean(errors.intervalPersistanceData)}
                  helperText={touched.intervalPersistanceData && errors.intervalPersistanceData}
                />
              </div>
            </div>

            <div className="form-button-group py-30">
              <Button
                type="submit"
                title="Salvar configurações"
                content="Salvar configurações"
                color="white"
              />
            </div>
          </form>
        )}
      </Formik>
    </section>
  )
}
export default Setting;