import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Operation, Control } from '@/app/action';
import { Card, Button, Icon } from '@/app/components';

const CardEntry = () => {
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state);
  const { extruderButton, entryButton } = useSelector((state) => state.operation); // RN: Devo receber sinal da coleira

  // FIXME: Definir como não ultrapassar limites
  // RN: Devo receber sinal da coleira
  const { entryTemperature, entryPressure, entryPower } = useSelector((state) => state.control);

  const handleEntryTemperature = (data) => {
    dispatch(
      Control.handleChangeEntryTemperature(data)
    )
  }

  const handleEntryPressure = (data) => {
    dispatch(
      Control.handleChangeEntryPressure(data)
    )
  }

  const handleEntryPower = (data) => {
    dispatch(
      Control.handleChangeEntryPower(data)
    )
  }

  const handleEntryButton = () => {
    dispatch(
      Operation.handleChangeEntryButton()
    )
    handleEntryTemperature(0);
    handleEntryPressure(0);
    handleEntryPower(0);
  }

  useEffect(() => {
    if (!extruderButton) {
      handleEntryTemperature(0);
      handleEntryPressure(0);
      handleEntryPower(0);
    }
  }, [extruderButton]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card
      icon="lamp"
      title="Alimentação"
      isOn={entryButton}
      handleOnClick={handleEntryButton}
    >
      <>
        <p className="flex flex-row flex-between">
          <span>Temperatura (°C)</span>
          <span className="text-info">{entryTemperature}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Pressão (MPa)</span>
          <span className="text-info">{entryPressure}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Potência (kW)</span>
          <span className="text-info">{entryPower}</span>
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
                const newPower = entryPower - setting.intervalEntryPower > 0
                  ? entryPower - setting.intervalEntryPower
                  : 0;

                handleEntryPower(newPower);
                handleEntryTemperature(newPower);
                handleEntryPressure(newPower);
              }}
              isDisable={!entryButton}
            />

            <Button
              type="button"
              title="Aumentar"
              content={<Icon icon="arrow-up" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newPower = entryPower + setting.intervalEntryPower;

                handleEntryPower(newPower);
                handleEntryTemperature(newPower);
                handleEntryPressure(newPower);
              }}
              isDisable={!entryButton}
            />
          </span>
        </p>
      </>
    </Card>
  )
}
export default CardEntry;