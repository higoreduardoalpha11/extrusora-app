import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Operation, Control } from '@/app/action';
import { Card, Button, Icon } from '@/app/components';

const CardDosage = () => {
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state);
  const { extruderButton, dosageButton } = useSelector((state) => state.operation); // RN: Devo receber sinal da coleira

  // FIXME: Definir como não ultrapassar limites
  // RN: Devo receber sinal da coleira
  const { dosageTemperature, dosagePressure, dosagePower } = useSelector((state) => state.control);

  const handleDosageTemperature = (data) => {
    dispatch(
      Control.handleChangeDosageTemperature(data)
    )
  }

  const handleDosagePressure = (data) => {
    dispatch(
      Control.handleChangeDosagePressure(data)
    )
  }

  const handleDosagePower = (data) => {
    dispatch(
      Control.handleChangeDosagePower(data)
    )
  }

  const handleDosageButton = () => {
    dispatch(
      Operation.handleChangeDosageButton()
    )
    handleDosageTemperature(0);
    handleDosagePressure(0);
    handleDosagePower(0);
  }

  useEffect(() => {
    if (!extruderButton) {
      handleDosageTemperature(0);
      handleDosagePressure(0);
      handleDosagePower(0);
    }
  }, [extruderButton]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card
      icon="lamp"
      title="Dosagem"
      isOn={dosageButton}
      handleOnClick={handleDosageButton}
    >
      <>
        <p className="flex flex-row flex-between">
          <span>Temperatura (°C)</span>
          <span className="text-info">{dosageTemperature}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Pressão (MPa)</span>
          <span className="text-info">{dosagePressure}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Potência (kW)</span>
          <span className="text-info">{dosagePower}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Controles</span>

          <span className="flex flex-row gap-5">
            <Button
              type="button"
              title="Diminir"
              content={<Icon icon="arrow-down" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newPower = dosagePower - setting.intervalDosagePower > 0
                  ? dosagePower - setting.intervalDosagePower
                  : 0;

                handleDosagePower(newPower);
                handleDosageTemperature(newPower);
                handleDosagePressure(newPower);
              }}
              isDisable={!dosageButton}
            />

            <Button
              type="button"
              title="Aumentar"
              content={<Icon icon="arrow-up" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newPower = dosagePower + setting.intervalDosagePower;

                handleDosagePower(newPower);
                handleDosageTemperature(newPower);
                handleDosagePressure(newPower);
              }}
              isDisable={!dosageButton}
            />
          </span>
        </p>
      </>
    </Card>
  )
}
export default CardDosage;