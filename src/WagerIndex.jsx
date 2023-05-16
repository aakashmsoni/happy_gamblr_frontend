import moment from "moment";
import "./WagerIndex.scoped.scss";

export function WagerIndex(props) {
  return (
    <div id="wager-index">
      <h1 className="display-5">My Bets</h1>
      <table className="table table-bordered table-hover table-light w-auto text-center">
        <thead>
          <tr className="table-active">
            <th scope="col">Date</th>
            <th scope="col">Sport</th>
            <th scope="col">Bet Type</th>
            <th scope="col">Wager Amount</th>
            <th scope="col">Odds</th>
            <th scope="col">Result</th>
            <th scope="col">Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {props.wagers.map(wager => (
            <tr key={wager.id}>
              <td>{moment(wager.created_at).format("lll")}</td>
              <td>{wager.sport.name}</td>
              <td>{wager.bet_type.name}</td>
              <td>${wager.wager_amount}</td>
              <td>{wager.odds}</td>
              <td>{props.onWin(wager)}</td>
              <td className={props.onWinColor(wager)}>${wager.profit_loss}</td>
              <td>
                <button type="button" className="btn btn-outline-primary" onClick={() => props.onShowWager(wager)}>
                  {" "}
                  Update{" "}
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-outline-danger" onClick={() => props.onDeleteWager(wager)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td> */}
          {/* </tr> */}
        </tbody>
      </table>
    </div>
  );
}
