import React from "react";

const LastFiveAvg = ({ stats, isLastFiveChecked, player, averages, teams }) => {
  if (isLastFiveChecked && stats && stats.length > 0) {
    //console.log(stats)
    const LastFiveAvgPts = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumPts = validStats.reduce((total, stat) => total + stat.pts, 0); // Sum the points
      return sumPts / Math.min(5, validStats.length); // Calculate the average
    })();

    const LastFiveAvgReb = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumReb = validStats.reduce((total, stat) => total + stat.reb, 0); // Sum the points
      return sumReb / Math.min(5, validStats.length); // Calculate the average
    })();

    const LastFiveAvgAst = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumAst = validStats.reduce((total, stat) => total + stat.ast, 0); // Sum the points
      return sumAst / Math.min(5, validStats.length); // Calculate the average
    })();

    const LastFiveAvgFga = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumFga = validStats.reduce((total, stat) => total + stat.fga, 0); // Sum the points
      return sumFga / Math.min(5, validStats.length); // Calculate the average
    })();

    const LastFiveAvgFgm = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumFgm = validStats.reduce((total, stat) => total + stat.fgm, 0); // Sum the points
      return sumFgm / Math.min(5, validStats.length); // Calculate the average
    })();

    const LastFiveAvgFg3a = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumFg3a = validStats.reduce((total, stat) => total + stat.fg3a, 0); // Sum the points
      return sumFg3a / Math.min(5, validStats.length); // Calculate the average
    })();

    const LastFiveAvgFg3m = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumFg3m = validStats.reduce((total, stat) => total + stat.fg3m, 0); // Sum the points
      return sumFg3m / Math.min(5, validStats.length); // Calculate the average
    })();

    const LastFiveAvgFg_pct = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumFga = validStats.reduce((total, stat) => total + stat.fga, 0); // Sum the points
      const sumFgm = validStats.reduce((total, stat) => total + stat.fgm, 0); // Sum the points
      return sumFgm / sumFga; // Calculate the average
    })();

    const LastFiveAvgFg3_pct = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5); // Filter out stats with gp equal to 0 and get the last five
      const sumFg3a = validStats.reduce((total, stat) => total + stat.fg3a, 0); // Sum the points
      const sumFg3m = validStats.reduce((total, stat) => total + stat.fg3m, 0); // Sum the points
      return sumFg3m / sumFg3a; // Calculate the average
    })();

    // const LastFiveAvgMin = (() => {
    //     const validStats = stats.filter(stat => stat.min !== "00").slice(0, 5);
    //     const sumMin = validStats.reduce((total, stat) => total + stat.min, 0);
    //     return sumMin / Math.min(5, validStats.length);
    //   })();

    const LastFiveAvgMin = (() => {
      const validStats = stats
        .filter((stat) => stat.min !== "00")
        .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
        .slice(0, 5);

      const sumMin = validStats.reduce((total, stat) => {
        // Split the "mm:ss" format and take only the minutes part
        const minutes = parseInt(stat.min.split(":")[0], 10);
        return total + minutes;
      }, 0);

      return sumMin / Math.min(5, validStats.length);
    })();

    const validStats = stats
      .filter((stat) => stat.min !== "00")
      .sort((a, b) => new Date(b.game.date) - new Date(a.game.date))
      .slice(0, 5);

    //const calculated_fg_pct = parseFloat(((validStat.fgm / validStat.fga) * 100).toFixed(2)) + "%";

    return (
      <div id="L5Avg-table">
        <div className="mt-5 text-center">
          {player.length === 2 && (
            <h2>
              {player[0]} {player[1]} Last 5 GP Averages
            </h2>
          )}
        </div>
        {/* remove -test from table-div to get overflow scoll property applied again */}
        <div className="mx-auto table-div-main mb-5">
          <table className="table mx-auto">
            <thead className="table-dark text-center">
              <tr
                style={{
                  position: "sticky",
                  top: "0",
                  backgroundColor: "#fff",
                }}
              >
                <th scope="col">GP</th>
                <th scope="col">Min</th>
                <th scope="col">PTS</th>
                <th scope="col">REB</th>
                <th scope="col">AST</th>
                <th scope="col">FGA</th>
                <th scope="col">FGM</th>
                <th scope="col">FG3A</th>
                <th scope="col">FG3M</th>
                <th scope="col">FG%</th>
                <th scope="col">3FG%</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-light text-center">
                <td>5.00</td>
                <td>{Math.round(LastFiveAvgMin)}</td>
                <td
                  className={`fw-bold ${
                    LastFiveAvgPts >= Math.round(averages.pts)
                      ? "text-success"
                      : LastFiveAvgPts < Math.round(averages.pts) &&
                        LastFiveAvgPts >= Math.round(averages.pts) - 5
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {LastFiveAvgPts}
                </td>
                <td
                  className={`fw-bold ${
                    LastFiveAvgReb >= Math.round(averages.reb)
                      ? "text-success"
                      : LastFiveAvgReb < Math.round(averages.reb) &&
                        LastFiveAvgReb >= Math.round(averages.reb) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {LastFiveAvgReb}
                </td>
                <td
                  className={`fw-bold ${
                    LastFiveAvgAst >= Math.round(averages.ast)
                      ? "text-success"
                      : LastFiveAvgAst < Math.round(averages.ast) &&
                        LastFiveAvgAst >= Math.round(averages.ast) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {LastFiveAvgAst}
                </td>
                <td
                  className={`fw-bold ${
                    LastFiveAvgFga >= Math.round(averages.fga)
                      ? "text-success"
                      : LastFiveAvgFga < Math.round(averages.fga) &&
                        LastFiveAvgFga >= Math.round(averages.fga) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {LastFiveAvgFga}
                </td>
                <td
                  className={`fw-bold ${
                    LastFiveAvgFgm >= Math.round(averages.fgm)
                      ? "text-success"
                      : LastFiveAvgFgm < Math.round(averages.fgm) &&
                        LastFiveAvgFgm >= Math.round(averages.fgm) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {LastFiveAvgFgm}
                </td>
                <td
                  className={`fw-bold ${
                    LastFiveAvgFg3a >= Math.round(averages.fg3a)
                      ? "text-success"
                      : LastFiveAvgFg3a < Math.round(averages.fg3a) &&
                        LastFiveAvgFg3a >= Math.round(averages.fg3a) - 2
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {LastFiveAvgFg3a}
                </td>
                <td
                  className={`fw-bold ${
                    LastFiveAvgFg3m >= Math.round(averages.fg3m)
                      ? "text-success"
                      : LastFiveAvgFg3m < Math.round(averages.fg3m) &&
                        LastFiveAvgFg3m >= Math.round(averages.fg3m) - 2
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {LastFiveAvgFg3m}
                </td>
                <td>{parseFloat(LastFiveAvgFg_pct * 100).toFixed(2) + "%"}</td>
                <td>{parseFloat(LastFiveAvgFg3_pct * 100).toFixed(2) + "%"}</td>
              </tr>
            </tbody>
          </table>

          <table className="table mx-auto">
            <thead className="table-dark text-center">
              <tr
                style={{
                  position: "sticky",
                  top: "0",
                  backgroundColor: "#fff",
                }}
              >
                <th scope="col">OPP</th>
                <th scope="col">Min</th>
                <th scope="col">PTS</th>
                <th scope="col">REB</th>
                <th scope="col">AST</th>
                <th scope="col">FGA</th>
                <th scope="col">FGM</th>
                <th scope="col">FG3A</th>
                <th scope="col">FG3M</th>
                <th scope="col">FG%</th>
                <th scope="col">3FG%</th>
              </tr>
            </thead>
            <tbody>
              {validStats.map((validStat, ind) => {
                const team = teams.find(
                  (team) => team.id === validStat.player.team_id
                );
                const opposingTeam =
                  validStat.game.home_team_id === team.id
                    ? teams.find(
                        (team) => team.id === validStat.game.visitor_team_id
                      )
                    : teams.find(
                        (team) => team.id === validStat.game.home_team_id
                      );
                const calculated_fg_pct =
                  parseFloat(
                    ((validStat.fgm / validStat.fga) * 100).toFixed(2)
                  ) + "%";
                const calculated_fg3_pct =
                  parseFloat(
                    ((validStat.fg3m / validStat.fg3a) * 100).toFixed(2)
                  ) + "%";
                const away_symbol =
                  validStat.game.home_team_id === validStat.team.id ? "" : "@";
                return (
                  <tr className="table-light text-center" key={ind}>
                    <td>
                      <a
                        className="opp-team-cell"
                        href="https://www.nba.com/stats/teams/defense?dir=A&sort=DEF_RATING"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {away_symbol + " "}
                        {opposingTeam.abbreviation}
                      </a>
                    </td>
                    <td>{validStat.min}</td>
                    <td
                      className={`fw-bold ${
                        validStat.pts >= Math.round(averages.pts)
                          ? "text-success"
                          : validStat.pts < Math.round(averages.pts) &&
                            validStat.pts >= Math.round(averages.pts) - 5
                          ? "text-warning"
                          : "text-danger"
                      }`}
                    >
                      {validStat.pts}
                    </td>
                    <td
                      className={`fw-bold ${
                        validStat.reb >= Math.round(averages.reb)
                          ? "text-success"
                          : validStat.reb < Math.round(averages.reb) &&
                            validStat.reb >= Math.round(averages.reb) - 3
                          ? "text-warning"
                          : "text-danger"
                      }`}
                    >
                      {validStat.reb}
                    </td>
                    <td
                      className={`fw-bold ${
                        validStat.ast >= Math.round(averages.ast)
                          ? "text-success"
                          : validStat.ast < Math.round(averages.ast) &&
                            validStat.ast >= Math.round(averages.ast) - 3
                          ? "text-warning"
                          : "text-danger"
                      }`}
                    >
                      {validStat.ast}
                    </td>
                    <td
                      className={`fw-bold ${
                        validStat.fga >= Math.round(averages.fga)
                          ? "text-success"
                          : validStat.fga < Math.round(averages.fga) &&
                            validStat.fga >= Math.round(averages.fga) - 3
                          ? "text-warning"
                          : "text-danger"
                      }`}
                    >
                      {validStat.fga}
                    </td>
                    <td
                      className={`fw-bold ${
                        validStat.fgm >= Math.round(averages.fgm)
                          ? "text-success"
                          : validStat.fgm < Math.round(averages.fgm) &&
                            validStat.fgm >= Math.round(averages.fgm) - 3
                          ? "text-warning"
                          : "text-danger"
                      }`}
                    >
                      {validStat.fgm}
                    </td>
                    <td
                      className={`fw-bold ${
                        validStat.fg3a >= Math.round(averages.fg3a)
                          ? "text-success"
                          : validStat.fg3a < Math.round(averages.fg3a) &&
                            validStat.fg3a >= Math.round(averages.fg3a) - 2
                          ? "text-warning"
                          : "text-danger"
                      }`}
                    >
                      {validStat.fg3a}
                    </td>
                    <td
                      className={`fw-bold ${
                        validStat.fg3m >= Math.round(averages.fg3m)
                          ? "text-success"
                          : validStat.fg3m < Math.round(averages.fg3m) &&
                            validStat.fg3m >= Math.round(averages.fg3m) - 2
                          ? "text-warning"
                          : "text-danger"
                      }`}
                    >
                      {validStat.fg3m}
                    </td>
                    <td>{calculated_fg_pct}</td>
                    <td>{calculated_fg3_pct}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default LastFiveAvg;

// {validStats.map((validStat, ind) => {
//     return (
//         <tr className='table-light text-center' key={ind}>
//             <td>{validStat.min}</td>
//             <td>{validStat.pts}</td>
//             <td>{validStat.reb}</td>
//             <td>{validStat.ast}</td>
//             <td>{validStat.fga}</td>
//             <td>{validStat.fgm}</td>
//             <td>{validStat.fg3a}</td>
//             <td>{validStat.fg3m}</td>
//             <td>{validStat.min}</td>
//             <td>{validStat.min}</td>
//             <td>{validStat.min}</td>
//         </tr>
//     )
// })}
