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
          <label htmlFor="sport_id">Sport ID:</label>
        </div>
        <div>
          <input defaultValue={props.wager.sport_id} name="sport_id" type="number"></input>
        </div>
        <div>
          <label htmlFor="bet_type_id">Bet Type ID:</label>
        </div>
        <div>
          <input defaultValue={props.wager.bet_type_id} name="bet_type_id" type="number"></input>
        </div>
        <div>
          <label htmlFor="wager_amount">Wager Amount</label>
        </div>
        <div>
          <input defaultValue={props.wager.wager_amount} name="sport_id" type="decimal"></input>
        </div>
        <div>
          <label htmlFor="odds">Odds</label>
        </div>
        <div>
          <input defaultValue={props.wager.odds} name="odds" type="number"></input>
        </div>
        <div>
          <label htmlFor="win">Win:</label>
        </div>
        <div>
          <input defaultValue={props.wager.win} name="win" type="boolean"></input>
        </div>
      </form>
    </div>
  );
}
