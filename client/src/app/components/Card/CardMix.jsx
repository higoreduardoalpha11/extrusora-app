import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Operation, Control } from '@/app/action';
import { Card, Button, Icon } from '@/app/components';

const CardMix = () => {
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state);
  const { extruderButton, mixButton } = useSelector((state) => state.operation); // RN: Devo receber sinal da coleira

  // FIXME: Definir como não ultrapassar limites
  // RN: Devo receber sinal da coleira
  const { mixTemperature, mixPressure, mixPower } = useSelector((state) => state.control);

  const handleMixTemperature = (data) => {
    dispatch(
      Control.handleChangeMixTemperature(data)
    )
  }

  const handleMixPressure = (data) => {
    dispatch(
      Control.handleChangeMixPressure(data)
    )
  }

  const handleMixPower = (data) => {
    dispatch(
      Control.handleChangeMixPower(data)
    )
  }

  const handleMixButton = () => {
    dispatch(
      Operation.handleChangeMixButton()
    )
    handleMixTemperature(0);
    handleMixPressure(0);
    handleMixPower(0);
  }

  useEffect(() => {
    if (!extruderButton) {
      handleMixTemperature(0);
      handleMixPressure(0);
      handleMixPower(0);
    }
  }, [extruderButton]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card
      icon="lamp"
      title="Mistura"
      isOn={mixButton}
      handleOnClick={handleMixButton}
    >
      <>
        <p className="flex flex-row flex-between">
          <span>Temperatura (°C)</span>
          <span className="text-info">{mixTemperature}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Pressão (MPa)</span>
          <span className="text-info">{mixPressure}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Potência (kW)</span>
          <span className="text-info">{mixPower}</span>
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
                const newPower = mixPower - setting.intervalMixPower > 0
                  ? mixPower - setting.intervalMixPower
                  : 0;

                handleMixPower(newPower);
                handleMixTemperature(newPower);
                handleMixPressure(newPower);
              }}
              isDisable={!mixButton}
            />

            <Button
              type="button"
              title="Aumentar"
              content={<Icon icon="arrow-up" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newPower = mixPower + setting.intervalMixPower;

                handleMixPower(newPower);
                handleMixTemperature(newPower);
                handleMixPressure(newPower);
              }}
              isDisable={!mixButton}
            />
          </span>
        </p>
      </>
    </Card>
  )
}
export default CardMix;