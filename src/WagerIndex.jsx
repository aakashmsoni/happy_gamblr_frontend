import moment from "moment";

export function WagerIndex(props) {
  return (
    <div id="wager-index">
      <h1>All Wagers</h1>
      {/* <span className="border-3">
        <div className="container" style={{ maxWidth: 2000, maxHeight: 100 }}>
          <div className="row">
            <div className="col-2">Date</div>
            <div className="col-2">Date</div>
            <div className="col-2">Date</div>
            <div className="col-2">Date</div>
            <div className="col-2">Date</div>
          </div>
        </div>
      </span> */}
      {/* <div className="card border-primary" style={{ maxWidth: 2000, maxHeight: 100 }}>
        {props.wagers.map(wager => (
          <div key={wager.id} className="wagers row">
            <div className="col-md-1">
              <img
                src="https://thumbs.dreamstime.com/b/simple-basketball-illustration-logo-club-218748709.jpg"
                style={{ maxWidth: 120 }}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <p className="card-text fs-6">{moment(wager.created_at).format("lll")}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <p className="card-text">{wager.sport.name}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <p className="card-text">{wager.bet_type.name}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <p className="card-text">${wager.wager_amount}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <p className="card-text">{wager.odds}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <p className="card-text">{wager.win}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <p className="card-text">${wager.profit_loss}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <button type="button" className="btn btn-primary mx-auto" onClick={() => props.onShowWager(wager)}>
                  {" "}
                  Update{" "}
                </button>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body border-primary">
                <button type="button" className="btn btn-danger" onClick={() => props.onDeleteWager(wager)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Sport</th>
            <th scope="col">Bet Type</th>
            <th scope="col">Wager Amount</th>
            <th scope="col">Odds</th>
            <th scope="col">Win</th>
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
              <td className={props.onWinColor(wager)}>{wager.win}</td>
              <td>${wager.profit_loss}</td>
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
