import { useEffect, useState } from 'react';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(Tooltip, Title, ArcElement, Legend);

function App() {
  const [chartData, setChartData] = useState({
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['green', 'lightgreen', 'darkgreen'],
    }],
    labels: ['green', 'lightgreen', 'darkgreen'],
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3001/api/pie-chart')  
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const labels = [];
          const values = [];

          for (const item of data) {
            labels.push(item.label);
            values.push(item.value);
          }

          setChartData({
            datasets: [{
              data: values,
              backgroundColor: ['green', 'light green', 'red','yellow','white','blue'],
            }],
            labels: labels,
          });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="App" style={{ width: '100%', height: '84%' }}>
      <Doughnut data={chartData} />
    </div>
  );
}

export default App;
