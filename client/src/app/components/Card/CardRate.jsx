import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, Button, Icon } from '@/app/components';

const CardRate = () => {
  const { setting } = useSelector((state) => state);
  const [isRate, setIsRate] = useState(false); // RN: Devo receber sinal da vazadora

  // FIXME: Definir como não ultrapassar limites
  const [shutterSpeed, setShutterSpeed] = useState(0); // RN: Devo enviar sinal para vazadora
  const [rate, setRate] = useState(0); // RN: Devo receber sinal da vazadora

  return (
    <Card
      icon="speed"
      title="Controle de rotação"
      isOn={isRate}
      handleOnClick={() => {
        setIsRate(!isRate);
        setShutterSpeed(0);
        setRate(0);
      }}
    >
      <>
        <p className="flex flex-row flex-between">
          <span>Rotação (rpm)</span>
          <span className="text-info">{shutterSpeed}</span>
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
                const newSpeed = shutterSpeed - setting.intervalRotation > 0
                  ? shutterSpeed - setting.intervalRotation
                  : 0;

                setShutterSpeed(newSpeed);
                setRate(newSpeed);
              }}
              isDisable={!isRate}
            />

            <Button
              type="button"
              title="Aumentar"
              content={<Icon icon="arrow-up" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newSpeed = shutterSpeed + setting.intervalRotation;

                setShutterSpeed(newSpeed);
                setRate(newSpeed);
              }}
              isDisable={!isRate}
            />
          </span>
        </p>
      </>
    </Card>
  )
}
export default CardRate;