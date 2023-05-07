import {
  CardExtruder,
  CardRate,
  CardEntry,
  CardMix,
  CardDosage,
  ChartLine,
} from '@/app/components';

const Dashboard = () => {
  return (
    <section className="dashboard py-30">
      <div className="container flex flex-col gap-20">
        <div className="grid grid-3 gap-20">
          <CardExtruder />
          <CardRate />
        </div>

        <div className="grid grid-3 gap-20">
          <CardEntry />
          <CardMix />
          <CardDosage />
        </div>

        <ChartLine target="temperatures" />
        <ChartLine target="pressures" />
        <ChartLine target="powers" />
        <ChartLine target="rates" />
      </div>
    </section>
  )
}
export default Dashboard;