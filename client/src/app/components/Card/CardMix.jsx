import { useSelector } from 'react-redux';
import { useState } from 'react';

import { Card, Button, Icon } from '@/app/components';

const CardMix = () => {
  const { setting } = useSelector((state) => state);
  const [isMix, setIsMix] = useState(false); // RN: Devo receber sinal da coleira

  // FIXME: Definir como não ultrapassar limites
  const [mixTemperature, setMixTemperature] = useState(0); // RN: Devo receber sinal da coleira
  const [mixPressure, setMixPressure] = useState(0); // RN: Devo receber sinal da coleira
  const [mixPower, setMixPower] = useState(0); // RN: Devo receber sinal da coleira

  return (
    <Card
      icon="lamp"
      title="Mistura"
      isOn={isMix}
      handleOnClick={() => {
        setIsMix(!isMix);
        setMixTemperature(0);
        setMixPressure(0);
        setMixPower(0);
      }}
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

                setMixPower(newPower);
                setMixTemperature(newPower);
                setMixPressure(newPower);
              }}
              isDisable={!isMix}
            />

            <Button
              type="button"
              title="Aumentar"
              content={<Icon icon="arrow-up" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newPower = mixPower + setting.intervalMixPower;

                setMixPower(newPower);
                setMixTemperature(newPower);
                setMixPressure(newPower);
              }}
              isDisable={!isMix}
            />
          </span>
        </p>
      </>
    </Card>
  )
}
export default CardMix;