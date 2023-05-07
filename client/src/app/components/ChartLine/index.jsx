import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import 'react-datepicker/dist/react-datepicker.css';

import { ChartHeader } from '@/app/components';

const ChartLine = ({ target }) => {
  const { temperatures, pressures, powers, rates } = useSelector((state) => state.analytics);
  const [startDate, setStartDate] = useState(new Date);

  const data = target === 'temperatures'
    ? temperatures : target === 'pressures'
      ? pressures : target === 'powers'
        ? powers : rates;

  return (
    <article className="chart-line flex flex-col gap-20 p-20 bg-bg-light border-radius-lg">
      <ChartHeader
        target={target}
        startDate={startDate}
        setStartDate={setStartDate}
      />

      {
        !data?.length > 0 ? (
          <span className="text-danger text-center">
            Nenhuma informação salva para o dia {dayjs(startDate).format('DD/MM/YYYY')}
          </span>
        ) : (
          <div
            className="scroll-none"
            style={{ overflowX: 'scroll' }}
          >
            <div style={{ width: '100%', minWidth: 1000, height: 600 }}>
              <ResponsiveContainer>
                <LineChart
                  width={1000}
                  height={300}
                  data={data}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" style={{ fontSize: 15 }} />
                  <YAxis style={{ fontSize: 15 }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Alimentacao"
                    stroke="#8884d8"
                    strokeDasharray="5 5"
                  />
                  <Line
                    type="monotone"
                    dataKey="Mistura"
                    stroke="#82ca9d"
                    strokeDasharray="3 4 5 2"
                  />
                  <Line
                    type="monotone"
                    dataKey="Dosagem"
                    stroke="#DCBB0A"
                    strokeDasharray="3 4 5 2"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )
      }
    </article>
  );
}
ChartLine.propTypes = {
  target: PropTypes.string.isRequired,
}
export default ChartLine;