import moment from "moment";
import "./SpreadIndex.scoped.scss";

export function SpreadIndex(props) {
  return (
    <div id="spread-index">
      {props.odds.map(game => (
        <div key={game.id} className="card w-50 ms-0 mb-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" colSpan={3}>
                  {game.sport_title} - Spread
                </th>
                <th scope="col">{game.bookmakers[0].title}</th>
                <th scope="col">{game.bookmakers[1].title}</th>
                <th scope="col">{game.bookmakers[2].title}</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row" colSpan={3}>
                  {game.home_team}
                </th>
                <td>
                  {game.bookmakers[0].markets[1].outcomes[0].point}
                  <br />
                  {game.bookmakers[0].markets[1].outcomes[0].price}
                </td>
                <td>
                  {game.bookmakers[1].markets[1].outcomes[0].point}
                  <br />
                  {game.bookmakers[1].markets[1].outcomes[0].price}
                </td>
                <td>
                  {game.bookmakers[2].markets[1].outcomes[0].point}
                  <br />
                  {game.bookmakers[2].markets[1].outcomes[0].price}
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={3}>
                  {game.away_team}
                </th>
                <td>
                  {game.bookmakers[0].markets[1].outcomes[1].point}
                  <br />
                  {game.bookmakers[0].markets[1].outcomes[1].price}
                </td>
                <td>
                  {game.bookmakers[1].markets[1].outcomes[1].point}
                  <br />
                  {game.bookmakers[1].markets[1].outcomes[1].price}
                </td>
                <td>
                  {game.bookmakers[2].markets[1].outcomes[1].point}
                  <br />
                  {game.bookmakers[2].markets[1].outcomes[1].price}
                </td>
              </tr>
              <tr>
                <caption className="row w-100 ms-0">{moment(game.commence_time).format("lll")}</caption>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
