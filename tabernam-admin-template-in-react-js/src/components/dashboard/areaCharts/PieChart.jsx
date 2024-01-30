import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { value: 5, label: "A", color: "#00ff2d42" },
  { value: 10, label: "B", color: "#00ff2d8c" },
  { value: 15, label: "C", color: "#0bff36ad" },
  { value: 15, label: "C", color: "#0bff36ad" },
  { value: 20, label: "D", color: "#18e63dc9" },
];

const colors = [
  {
    color: "#00ff2d42",
  },
  {
    color: "#00ff2d8c",
  },
  {
    color: "#0bff36ad",
  },
  {
    color: "#0bff36ad",
  },
  {
    color: "#18e63dc9",
  },
];

const size = {
  width: 400,
  height: 200,
};

export default function PieArcLabel() {
  const [chartData, setChartData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/api/pie-chart")
        .then((response) => response.json())
        .then((data) => {
          const newData = data.map((item,index) => {
            return {
              ...item,
              color: colors[index].color,
            };
          });
         

          setChartData(newData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  console.log(chartData, "chartData");
  console.log(data, "data");

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
    <PieChart
      series={[
        {
      
          arcLabelMinAngle: 45,
          data: chartData,
        },
      ]}
      
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
          color: "red",
        },
      }}
      {...size}

    />
    </div>
  );
}
