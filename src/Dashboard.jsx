import "./Dashboard.scoped.scss";

export function Dashboard(props) {
  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      Total Profits: ${props.calcTotalProfitLoss(props.wagers)}
      <p>Average Odds: {props.calcAvgOdds(props.wagers)}</p>
    </div>
  );
}
