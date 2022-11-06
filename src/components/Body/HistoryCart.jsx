import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function HistoryCart(props) {
  const [chartList, setChartList] = useState([]);
  // const dayAndInterval = {
  //   "1h": {
  //     number: 1,
  //     interval: "hours"
  //   },
  //   "24h": {
  //     number: 24,
  //     interval: "hours"
  //   },
  //   "7d": {
  //     number: 7,
  //     interval: "daily"
  //   },
  //   "14d": {
  //     number: 14,
  //     interval: "daily"
  //   },
  //   "30d": {
  //     number: 30,
  //     interval: "daily"
  //   },
  //   "1yr": {
  //     number: 1,
  //     interval: "years"
  //   }
  // };

  async function getCoinChart() {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=30&interval=daily`
    );
    setChartList(response.data.prices);
  }

  const coinChartData = chartList.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2)
  }));

  useEffect(() => {
    getCoinChart();
  }, []);
  const options = {
    responsive: true
  };

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: props.id,
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
export default HistoryCart;
