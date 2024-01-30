import AreaBarChart from "./AreaBarChart"
import AreaProgressChart from "./AreaProgressChart"
import PieArcLabel from "./PieChart"

const AreaCharts = () => {
  return (
    <section className="content-area-charts">
      <AreaBarChart />
      <PieArcLabel/>
      {/* <AreaProgressChart /> */}
    </section>
  )
}

export default AreaCharts
