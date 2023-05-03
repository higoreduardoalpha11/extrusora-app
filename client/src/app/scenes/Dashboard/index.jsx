import {
  CardExtruder,
  CardRate,
  CardEntry,
  CardMix,
  CardDosage,
} from '@/app/components';

const Dashboard = () => {
  return (
    <section className="dashboard py-30">
      <div className="container">
        <div className="grid grid-3 gap-20 pb-20">
          <CardExtruder />
          <CardRate />
        </div>

        <div className="grid grid-3 gap-20">
          <CardEntry />
          <CardMix />
          <CardDosage />          
        </div>
      </div>
    </section>
  )
}
export default Dashboard;