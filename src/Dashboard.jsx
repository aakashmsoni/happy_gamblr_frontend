import "./Dashboard.scoped.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export function Dashboard(props) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const dataWinLoss = {
    labels: ["Win", "Loss"],
    datasets: [
      {
        label: "Count",
        data: [`${props.calcWinLoss(props.wagers)[0]}`, `${props.calcWinLoss(props.wagers)[1]}`],
        backgroundColor: ["rgba(0, 190, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
        borderColor: ["rgba(10, 192, 192, 1)", "rgba(255, 10, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      <div className="card text-bg-secondary border-warning w-50 ms-5 p-3" style={{ height: 350 }}>
        Total Profit:
        <div className="card text-bg-light ps-1 text-center border-success" style={{ fontSize: 40, maxWidth: 175 }}>
          ${props.calcTotalProfitLoss(props.wagers)}
        </div>
        <p>Average Odds: {props.calcAvgOdds(props.wagers)}</p>
        <p>Wins: {props.calcWinLoss(props.wagers)[0]}</p>
        <p>Losses: {props.calcWinLoss(props.wagers)[1]}</p>
        <div id="doughnut" style={{ width: 250 }}>
          {/* <Doughnut data={props.calcWinLoss(props.wagers)} /> */}
          <Doughnut data={dataWinLoss} options={{ color: "#000" }} />
        </div>
      </div>
    </div>
  );
}
