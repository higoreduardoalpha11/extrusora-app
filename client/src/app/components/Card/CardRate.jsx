import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Operation, Control } from '@/app/action';
import { Card, Button, Icon } from '@/app/components';

const CardRate = () => {
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state);
  const { extruderButton, rateButton } = useSelector((state) => state.operation); // RN: Devo receber sinal da vazadora
  // FIXME: Definir como não ultrapassar limites
  // RN: Devo enviar sinal para vazadora
  // RN: Devo receber sinal da vazadora
  const { rateRotation, rate } = useSelector((state) => state.control);

  const handleRateButton = () => {
    dispatch(
      Operation.handleChangeRateButton()
    )
    handleRateRotation(0);
    handleRate(0);
  }

  const handleRateRotation = (data) => {
    dispatch(
      Control.handleChangeRateRotation(data)
    )
  }

  const handleRate = (data) => {
    dispatch(
      Control.handleChangeRate(data)
    )
  }

  useEffect(() => {
    if (!extruderButton) {
      handleRateRotation(0);
      handleRate(0);
    }
  }, [extruderButton]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card
      icon="speed"
      title="Controle de rotação"
      isOn={rateButton}
      handleOnClick={handleRateButton}
    >
      <>
        <p className="flex flex-row flex-between">
          <span>Rotação (rpm)</span>
          <span className="text-info">{rateRotation}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Vazão (kg/h)</span>
          <span className="text-info">{rate}</span>
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
                const newSpeed = rateRotation - setting.intervalRotation > 0
                  ? rateRotation - setting.intervalRotation
                  : 0;

                handleRateRotation(newSpeed);
                handleRate(newSpeed);
              }}
              isDisable={!rateButton}
            />

            <Button
              type="button"
              title="Aumentar"
              content={<Icon icon="arrow-up" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newSpeed = rateRotation + setting.intervalRotation;

                handleRateRotation(newSpeed);
                handleRate(newSpeed);
              }}
              isDisable={!rateButton}
            />
          </span>
        </p>
      </>
    </Card>
  )
}
export default CardRate;