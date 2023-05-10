export function WagerIndex(props) {
  return (
    <div id="wager-index">
      <h1>All Wagers</h1>
      <div className="row mb-3" style={{ maxWidth: 2000, maxHeight: 100 }}>
        {props.wagers.map((wager) => (
          <div key={wager.id} className="row g-0">
            <div className="col-md-1">
              <img
                src="https://thumbs.dreamstime.com/b/simple-basketball-illustration-logo-club-218748709.jpg"
                style={{ maxWidth: 120 }}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-1">
              <div className="card-body text-bg-secondary">
                <h5 className="card-title">Date</h5>
                <p className="card-text">{wager.created_at}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body">
                <h5 className="card-title">Sport</h5>
                <p className="card-text">{wager.sport_id}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body">
                <h5 className="card-title">Bet Type</h5>
                <p className="card-text">{wager.bet_type_id}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body">
                <h5 className="card-title">Wager Amount</h5>
                <p className="card-text">${wager.wager_amount}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body">
                <h5 className="card-title">Odds</h5>
                <p className="card-text">{wager.odds}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body">
                <h5 className="card-title">Win/Loss</h5>
                <p className="card-text">{wager.win}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body">
                <h5 className="card-title">Profit/Loss</h5>
                <p className="card-text">${wager.profit_loss}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
