export function WagerShow(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateWager(params, props.wager.id);
    console.log(props.wager.id);
    event.target.reset();
    window.location.href = "/wager-index";
  };
  return (
    <div id="wager-show">
      <h2>Update Your Bet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sport_id">Sport:</label>
        </div>
        <div>
          <select name="sport_id" type="number">
            <option value="1">NBA</option>
            <option value="2">MLB</option>
            <option value="3">NCAA</option>
            <option value="4">MLS</option>
            <option value="5">NHL</option>
            <option value="6">COMBO</option>
          </select>
        </div>
        <div>
          <label htmlFor="bet_type_id">Bet Type:</label>
        </div>
        <select name="bet_type_id" type="number">
          <option value="1">MONEYLINE</option>
          <option value="2">PARLAY</option>
          <option value="3">SPREAD</option>
          <option value="4">OVER/UNDER</option>
          <option value="5">SINGLE</option>
          <option value="6">ROUND ROBIN</option>
        </select>
        <div>
          <label htmlFor="wager_amount">Wager Amount:</label>
        </div>
        <div>
          <input defaultValue={props.wager.wager_amount} name="wager_amount" type="decimal"></input>
        </div>
        <div>
          <label htmlFor="odds">Odds:</label>
        </div>
        <div>
          <input defaultValue={props.wager.odds} name="odds" type="number"></input>
        </div>
        <div>
          <label htmlFor="win">Win/Loss:</label>
        </div>
        <select name="win" type="boolean">
          <option value="true">Win</option>
          <option value="false">Loss</option>
        </select>
        <br />
        <button className="btn btn-secondary mt-3 col-12" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
