import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, Button, Icon } from '@/app/components';

const CardDosage = () => {
  const { setting } = useSelector((state) => state);
  const [isDosage, setIsDosage] = useState(false); // RN: Devo receber sinal da coleira

    // FIXME: Definir como não ultrapassar limites
    const [dosageTemperature, setDosageTemperature] = useState(0); // RN: Devo receber sinal da coleira
    const [dosagePressure, setDosagePressure] = useState(0); // RN: Devo receber sinal da coleira
    const [dosagePower, setDosagePower] = useState(0); // RN: Devo receber sinal da coleira
  
  return (
    <Card
      icon="lamp"
      title="Dosagem"
      isOn={isDosage}
      handleOnClick={() => {
        setIsDosage(!isDosage);
        setDosageTemperature(0);
        setDosagePressure(0);
        setDosagePower(0);
      }}
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

                setDosagePower(newPower);
                setDosageTemperature(newPower);
                setDosagePressure(newPower);
              }}
              isDisable={!isDosage}
            />

            <Button
              type="button"
              title="Aumentar"
              content={<Icon icon="arrow-up" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newPower = dosagePower + setting.intervalDosagePower;

                setDosagePower(newPower);
                setDosageTemperature(newPower);
                setDosagePressure(newPower);
              }}
              isDisable={!isDosage}
            />
          </span>
        </p>
      </>
    </Card>
  )
}
export default CardDosage;