import { useSelector } from 'react-redux';
import { useState } from 'react';

import { Card, Button, Icon } from '@/app/components';

const CardEntry = () => {
  const { setting } = useSelector((state) => state);
  const [isEntry, setIsEntry] = useState(false); // RN: Devo receber sinal da coleira

  // FIXME: Definir como não ultrapassar limites
  const [entryTemperature, setEntryTemperature] = useState(0); // RN: Devo receber sinal da coleira
  const [entryPressure, setEntryPressure] = useState(0); // RN: Devo receber sinal da coleira
  const [entryPower, setEntryPower] = useState(0); // RN: Devo receber sinal da coleira

  return(
    <Card
      icon="lamp"
      title="Alimentação"
      isOn={isEntry}
      handleOnClick={() => {
        setIsEntry(!isEntry);
        setEntryTemperature(0);
        setEntryPressure(0);
        setEntryPower(0);
      }}
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

                setEntryPower(newPower);
                setEntryTemperature(newPower);
                setEntryPressure(newPower);
              }}
              isDisable={!isEntry}
            />

            <Button
              type="button"
              title="Aumentar"
              content={<Icon icon="arrow-up" />}
              color="white"
              variate="sm"
              handleOnClick={() => {
                const newPower = entryPower + setting.intervalEntryPower;

                setEntryPower(newPower);
                setEntryTemperature(newPower);
                setEntryPressure(newPower);
              }}
              isDisable={!isEntry}
            />
          </span>
        </p>
      </>
    </Card>
  )
}
export default CardEntry;