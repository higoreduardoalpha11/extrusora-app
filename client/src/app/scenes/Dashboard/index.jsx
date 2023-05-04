import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MdDeviceThermostat } from 'react-icons/md';

import { Analytics } from '@/app/action';
import eventBus from '@/app/utils/eventBus';
import {
  CardExtruder,
  CardRate,
  CardEntry,
  CardMix,
  CardDosage,
  ChartLine,
} from '@/app/components';

const Dashboard = () => {
  const { temperatures } = useSelector((state) => state.analytics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      Analytics.handleChangeTemperatures('2023-05-04', (message) => {
        if (message) eventBus.disptach('toast', message);
      })
    )
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="dashboard py-30">
      <div className="container">
        <div className="grid grid-3 gap-20 pb-20">
          <CardExtruder />
          <CardRate />
        </div>

        <div className="grid grid-3 gap-20 pb-20">
          <CardEntry />
          <CardMix />
          <CardDosage />          
        </div>

        <article className="flex flex-col gap-20 p-20 bg-bg-light border-radius-lg">
          <span className="flex flex-row flex-start gap-30 font-sm">
            <MdDeviceThermostat style={{ fontSize: 50 }} />
            Níveis de temperatura
          </span>
          
          <ChartLine data={temperatures} />
        </article>
      </div>
    </section>
  )
}
export default Dashboard;