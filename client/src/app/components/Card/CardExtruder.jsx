import { useDispatch, useSelector } from 'react-redux';

import { Operation } from '@/app/action';
import { Card } from '@/app/components';

const CardExtruder = () => {
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state);
  const { extruderButton } = useSelector((state) => state.operation); // RN: Devo receber sinal da extrusora

  const handleExtruderButton = () => {
    dispatch(
      Operation.handleChangeExtruderButton()
    )
  }

  return (
    <Card
      icon="settings"
      title="Extrusora"
      isOn={extruderButton}
      handleOnClick={handleExtruderButton}
      isPower
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