export function WagerShow(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateWager(params, props.wager.id);
    event.target.reset();
  };
  return (
    <div id="wagers-show">
      <h2>Update Wager</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sport_id">Update Sport:</label>
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
          <label htmlFor="bet_type_id">Update Bet Type:</label>
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
          <label htmlFor="wager_amount">Update Wager Amount:</label>
        </div>
        <div>
          <input defaultValue={props.wager.wager_amount} name="sport_id" type="decimal"></input>
        </div>
        <div>
          <label htmlFor="odds">Update Odds:</label>
        </div>
        <div>
          <input defaultValue={props.wager.odds} name="odds" type="number"></input>
        </div>
        <div>
          <label htmlFor="win">Update Win/Loss:</label>
        </div>
        <select name="win" type="boolean">
          <option value="true">Win</option>
          <option value="false">Loss</option>
        </select>
        <br />
        <button className="btn btn-secondary mt-3 me-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
