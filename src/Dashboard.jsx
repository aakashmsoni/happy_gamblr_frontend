import "./Dashboard.scoped.scss";

export function Dashboard(props) {
  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      <p>Total Profits: ${props.calcTotalProfitLoss(props.wagers)}</p>
      <p>Average Odds: {props.calcAvgOdds(props.wagers)}</p>
      <p>Wins: {props.calcWinLoss(props.wagers)[0]}</p>
      <p>Losses: {props.calcWinLoss(props.wagers)[1]}</p>
    </div>
  );
}
