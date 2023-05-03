import { useSelector } from 'react-redux';
import { useState } from 'react';

import { Card } from '@/app/components';

const CardExtruder = () => {
  const { setting } = useSelector((state) => state);
  const [isExtruder, setIsExtruder] = useState(false); // RN: Devo receber sinal da extrusora

  return (
    <Card
      icon="settings"
      title="Extrusora"
      isOn={isExtruder}
      handleOnClick={() => setIsExtruder(!isExtruder)}
    >
      <>
        <p className="flex flex-row flex-between">
          <span>Temperatura Máx. (°C)</span>
          <span className="text-warning">{setting.limitTemperature}</span>
        </p>

        <p className="flex flex-row flex-between">
          <span>Pressão Máx. (MPa)</span>
          <span className="text-warning">{setting.limitPressure}</span>
        </p>
      </>
    </Card>
  )
}
export default CardExtruder;