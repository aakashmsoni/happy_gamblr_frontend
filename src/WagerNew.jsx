export function WagerNew(props) {
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const params = new FormData(event.target);
  //   event.target.reset();
  //   props.onCreateWager(params);

  // const handleClick = () => {
  //   console.log(props.wager);

  const handleClick = event => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onSubmitWager(params);
    console.log(params);
  };

  return (
    <div id="wager-new" className="row">
      <div className="col-sm-4 ms-5 mt-5">
        <div className="card border-warning text-center m-5 pb-3 pt-2">
          <h2>New Bet</h2>
          <form onSubmit={handleClick}>
            <div>
              <label className="p-1" htmlFor="sport_id">
                Choose a sport:
              </label>
            </div>
            <div>
              <select className="form-select mb-1" name="sport_id" type="number">
                <option value="1">NBA</option>
                <option value="2">MLB</option>
                <option value="3">NCAA</option>
                <option value="4">MLS</option>
                <option value="5">NHL</option>
                <option value="6">COMBO</option>
              </select>
            </div>
            <div>
              <label className="p-1" htmlFor="bet_type_id">
                Choose a bet type:
              </label>
            </div>
            <select className="form-select mb-1" name="bet_type_id" type="number">
              <option value="1">MONEYLINE</option>
              <option value="2">PARLAY</option>
              <option value="3">SPREAD</option>
              <option value="4">OVER/UNDER</option>
              <option value="5">SINGLE</option>
              <option value="6">ROUND ROBIN</option>
            </select>
            <div>
              <label className="p-1" htmlFor="win">
                Enter the result of the bet:
              </label>
            </div>
            <select className="form-select mb-1" name="win" type="boolean">
              <option value="true">Win</option>
              <option value="false">Loss</option>
            </select>
            <div>
              <label className="p-1 mt-2" htmlFor="wager_amount">
                Enter your wager amount:
              </label>
            </div>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input className="form-control" placeholder="0.00" name="wager_amount" type="decimal"></input>
            </div>
            <div>
              <label className="p-1 pt-2" htmlFor="odds">
                Enter the odds:
              </label>
            </div>
            <div className="input-group">
              <input className="form-control" placeholder="-110" name="odds" type="number"></input>
            </div>

            <br />

            <button className="btn btn-secondary pb-1 col-6" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
