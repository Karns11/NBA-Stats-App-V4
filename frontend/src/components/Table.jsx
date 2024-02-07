import React from "react";

function StatsTable({ stats, player, teams, averages }) {
  return (
    <div id="Stats-table" className="pb-5">
      <div className="text-center">
        {player.length === 2 && (
          <h2 className="mt-5">
            {player[0]} {player[1]} Box Scores
          </h2>
        )}
      </div>
      <div className="mx-auto table-div-main">
        <table className="table mx-auto">
          {stats && stats.length > 0 && (
            <thead className="table-dark text-center">
              <tr
                style={{
                  position: "sticky",
                  top: "0",
                  backgroundColor: "#fff",
                }}
              >
                <th scope="col">Date</th>
                <th scope="col">MINS</th>
                <th scope="col">OPP</th>
                <th scope="col">PTS</th>
                <th scope="col">REB</th>
                <th scope="col">AST</th>
                <th scope="col">FGA</th>
                <th scope="col">FGM</th>
                <th scope="col">FG3A</th>
                <th scope="col">FG3M</th>
              </tr>
            </thead>
          )}
          <tbody>
            {stats &&
              stats.length > 0 &&
              averages &&
              stats
                .sort((a, b) => (a.game.date > b.game.date ? -1 : 1))
                .map((stat, ind) => {
                  const team = teams.find(
                    (team) => team.id === stat.player.team_id
                  );
                  const opposingTeam =
                    stat.game.home_team_id === team.id
                      ? teams.find(
                          (team) => team.id === stat.game.visitor_team_id
                        )
                      : teams.find(
                          (team) => team.id === stat.game.home_team_id
                        );
                  const away_symbol =
                    stat.game.home_team_id === stat.team.id ? "" : "@";
                  return (
                    <tr className="table-light text-center" key={ind}>
                      <th scope="row">{stat.game.date.substring(5, 10)}</th>
                      <td>{stat.min}</td>
                      <td>
                        <a
                          className="opp-team-cell"
                          href="https://www.nba.com/stats/teams/defense?dir=A&sort=DEF_RATING"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {away_symbol + " "}
                          {opposingTeam.full_name}
                        </a>
                      </td>
                      <td
                        className={`fw-bold ${
                          stat.pts >= Math.round(averages.pts)
                            ? "text-success"
                            : stat.pts < Math.round(averages.pts) &&
                              stat.pts >= Math.round(averages.pts) - 5
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {stat.pts}
                      </td>
                      <td
                        className={`fw-bold ${
                          stat.reb >= Math.round(averages.reb)
                            ? "text-success"
                            : stat.reb < Math.round(averages.reb) &&
                              stat.reb >= Math.round(averages.reb) - 3
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {stat.reb}
                      </td>
                      <td
                        className={`fw-bold ${
                          stat.ast >= Math.round(averages.ast)
                            ? "text-success"
                            : stat.ast < Math.round(averages.ast) &&
                              stat.ast >= Math.round(averages.ast) - 3
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {stat.ast}
                      </td>
                      <td
                        className={`fw-bold ${
                          stat.fga >= Math.round(averages.fga)
                            ? "text-success"
                            : stat.fga < Math.round(averages.fga) &&
                              stat.fga >= Math.round(averages.fga) - 3
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {stat.fga}
                      </td>
                      <td
                        className={`fw-bold ${
                          stat.fgm >= Math.round(averages.fgm)
                            ? "text-success"
                            : stat.fgm < Math.round(averages.fgm) &&
                              stat.fgm >= Math.round(averages.fgm) - 3
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {stat.fgm}
                      </td>
                      <td
                        className={`fw-bold ${
                          stat.fg3a >= Math.round(averages.fg3a)
                            ? "text-success"
                            : stat.fg3a < Math.round(averages.fg3a) &&
                              stat.fg3a >= Math.round(averages.fg3a) - 2
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {stat.fg3a}
                      </td>
                      <td
                        className={`fw-bold ${
                          stat.fg3m >= Math.round(averages.fg3m)
                            ? "text-success"
                            : stat.fg3m < Math.round(averages.fg3m) &&
                              stat.fg3m >= Math.round(averages.fg3m) - 2
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {stat.fg3m}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatsTable;
