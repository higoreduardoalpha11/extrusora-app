import PropTypes from 'prop-types';
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

const ChartLine = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 600 }}>
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
  );
}
ChartLine.propTypes = {
  data: PropTypes.array.isRequired,
}
export default ChartLine;