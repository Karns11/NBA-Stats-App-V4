import React from "react";

const HomeAwayTable = ({ stats, isHomeAwayChecked, player, averages }) => {
  if (isHomeAwayChecked && stats && stats.length > 0) {
    const AvgHomePts = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumPts = homeStats.reduce((total, stat) => total + stat.pts, 0); // Sum the points
      return sumPts / homeStats.length; // Calculate the average
    })();

    const AvgAwayPts = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumPts = awayStats.reduce((total, stat) => total + stat.pts, 0); // Sum the points
      return sumPts / awayStats.length; // Calculate the average
    })();

    const AvgHomeReb = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumReb = homeStats.reduce((total, stat) => total + stat.reb, 0); // Sum the points
      return sumReb / homeStats.length; // Calculate the average
    })();

    const AvgAwayReb = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumReb = awayStats.reduce((total, stat) => total + stat.reb, 0); // Sum the points
      return sumReb / awayStats.length; // Calculate the average
    })();

    const AvgHomeAst = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumAst = homeStats.reduce((total, stat) => total + stat.ast, 0); // Sum the points
      return sumAst / homeStats.length; // Calculate the average
    })();

    const AvgAwayAst = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumAst = awayStats.reduce((total, stat) => total + stat.ast, 0); // Sum the points
      return sumAst / awayStats.length; // Calculate the average
    })();

    const AvgHomeFga = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumFga = homeStats.reduce((total, stat) => total + stat.fga, 0); // Sum the points
      return sumFga / homeStats.length; // Calculate the average
    })();

    const AvgAwayFga = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumFga = awayStats.reduce((total, stat) => total + stat.fga, 0); // Sum the points
      return sumFga / awayStats.length; // Calculate the average
    })();

    const AvgHomeFgm = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumFgm = homeStats.reduce((total, stat) => total + stat.fgm, 0); // Sum the points
      return sumFgm / homeStats.length; // Calculate the average
    })();

    const AvgAwayFgm = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumFgm = awayStats.reduce((total, stat) => total + stat.fgm, 0); // Sum the points
      return sumFgm / awayStats.length; // Calculate the average
    })();

    const AvgHomeFg3a = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumFg3a = homeStats.reduce((total, stat) => total + stat.fg3a, 0); // Sum the points
      return sumFg3a / homeStats.length; // Calculate the average
    })();

    const AvgAwayFg3a = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumFg3a = awayStats.reduce((total, stat) => total + stat.fg3a, 0); // Sum the points
      return sumFg3a / awayStats.length; // Calculate the average
    })();

    const AvgHomeFg3m = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumFg3m = homeStats.reduce((total, stat) => total + stat.fg3m, 0); // Sum the points
      return sumFg3m / homeStats.length; // Calculate the average
    })();

    const AvgAwayFg3m = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumFg3m = awayStats.reduce((total, stat) => total + stat.fg3m, 0); // Sum the points
      return sumFg3m / awayStats.length; // Calculate the average
    })();

    const AvgHomeFg_pct = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumFg_pct = homeStats.reduce(
        (total, stat) => total + stat.fg_pct,
        0
      ); // Sum the points
      return sumFg_pct / homeStats.length; // Calculate the average
    })();

    const AvgAwayFg_pct = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumFg_pct = awayStats.reduce(
        (total, stat) => total + stat.fg_pct,
        0
      ); // Sum the points
      return sumFg_pct / awayStats.length; // Calculate the average
    })();

    const AvgHomeFg3_pct = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );
      const sumFg3_pct = homeStats.reduce(
        (total, stat) => total + stat.fg3_pct,
        0
      ); // Sum the points
      return sumFg3_pct / homeStats.length; // Calculate the average
    })();

    const AvgAwayFg3_pct = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );
      const sumFg3_pct = awayStats.reduce(
        (total, stat) => total + stat.fg3_pct,
        0
      ); // Sum the points
      return sumFg3_pct / awayStats.length; // Calculate the average
    })();

    const AvgHomeMin = (() => {
      const homeStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
      );

      const sumMin = homeStats.reduce((total, stat) => {
        // Split the "mm:ss" format and take only the minutes part
        const minutes = parseInt(stat.min.split(":")[0], 10);
        return total + minutes;
      }, 0);

      return sumMin / homeStats.length;
    })();

    const AvgAwayMin = (() => {
      const awayStats = stats.filter(
        (stat) =>
          (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
      );

      const sumMin = awayStats.reduce((total, stat) => {
        // Split the "mm:ss" format and take only the minutes part
        const minutes = parseInt(stat.min.split(":")[0], 10);
        return total + minutes;
      }, 0);

      return sumMin / awayStats.length;
    })();

    const homeStats = stats.filter(
      (stat) => (stat.game.home_team_id === stat.team.id) & (stat.min !== "00")
    );

    const awayStats = stats.filter(
      (stat) => (stat.game.home_team_id !== stat.team.id) & (stat.min !== "00")
    );

    //console.log(Math.round(AvgHomeFga) + " &" + " " + AvgHomeFga.toFixed(2) + " &" + " " + Math.round(averages.fga))

    return (
      <div id="Home-Away-Table">
        <div className="mt-5 text-center">
          {player.length === 2 && (
            <h2>
              {player[0]} {player[1]} Home Averages
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
                <td>{homeStats.length}</td>
                <td>{AvgHomeMin.toFixed()}</td>
                <td
                  className={`fw-bold ${
                    AvgHomePts >= Math.round(averages.pts)
                      ? "text-success"
                      : AvgHomePts < Math.round(averages.pts) &&
                        AvgHomePts >= Math.round(averages.pts) - 5
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgHomePts.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgHomeReb >= Math.round(averages.reb)
                      ? "text-success"
                      : AvgHomeReb < Math.round(averages.reb) &&
                        AvgHomeReb >= Math.round(averages.reb) - 5
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgHomeReb.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgHomeAst >= Math.round(averages.ast)
                      ? "text-success"
                      : AvgHomeAst < Math.round(averages.ast) &&
                        AvgHomeAst >= Math.round(averages.ast) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgHomeAst.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgHomeFga >= Math.round(averages.fga)
                      ? "text-success"
                      : AvgHomeFga < Math.round(averages.fga) &&
                        AvgHomeFga >= Math.round(averages.fga) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgHomeFga.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgHomeFgm >= Math.round(averages.fgm)
                      ? "text-success"
                      : AvgHomeFgm < Math.round(averages.fgm) &&
                        AvgHomeFgm >= Math.round(averages.fgm) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgHomeFgm.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgHomeFg3a >= Math.round(averages.fg3a)
                      ? "text-success"
                      : AvgHomeFg3a < Math.round(averages.fg3a) &&
                        AvgHomeFg3a >= Math.round(averages.fg3a) - 2
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgHomeFg3a.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgHomeFg3m >= Math.round(averages.fg3m)
                      ? "text-success"
                      : AvgHomeFg3m < Math.round(averages.fg3m) &&
                        AvgHomeFg3m >= Math.round(averages.fg3m) - 2
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgHomeFg3m.toFixed(2)}
                </td>
                <td>{(AvgHomeFg_pct * 100).toFixed(2) + "%"}</td>
                <td>{(AvgHomeFg3_pct * 100).toFixed(2) + "%"}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5 text-center">
            {player.length === 2 && (
              <h2>
                {player[0]} {player[1]} Away Averages
              </h2>
            )}
          </div>

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
                <td>{awayStats.length}</td>
                <td>{AvgAwayMin.toFixed()}</td>
                <td
                  className={`fw-bold ${
                    AvgAwayPts >= Math.round(averages.pts)
                      ? "text-success"
                      : AvgAwayPts < Math.round(averages.pts) &&
                        AvgAwayPts >= Math.round(averages.pts) - 5
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgAwayPts.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgAwayReb >= Math.round(averages.reb)
                      ? "text-success"
                      : AvgAwayReb < Math.round(averages.reb) &&
                        AvgAwayReb >= Math.round(averages.reb) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgAwayReb.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgAwayAst >= Math.round(averages.ast)
                      ? "text-success"
                      : AvgAwayAst < Math.round(averages.ast) &&
                        AvgAwayAst >= Math.round(averages.ast) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgAwayAst.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgAwayFga >= Math.round(averages.fga)
                      ? "text-success"
                      : AvgAwayFga < Math.round(averages.fga) &&
                        AvgAwayFga >= Math.round(averages.fga) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgAwayFga.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgAwayFgm >= Math.round(averages.fgm)
                      ? "text-success"
                      : AvgAwayFgm < Math.round(averages.fgm) &&
                        AvgAwayFgm >= Math.round(averages.fgm) - 3
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgAwayFgm.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgAwayFg3a >= Math.round(averages.fg3a)
                      ? "text-success"
                      : AvgAwayFg3a < Math.round(averages.fg3a) &&
                        AvgAwayFg3a >= Math.round(averages.fg3a) - 2
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgAwayFg3a.toFixed(2)}
                </td>
                <td
                  className={`fw-bold ${
                    AvgAwayFg3m >= Math.round(averages.fg3m)
                      ? "text-success"
                      : AvgAwayFg3m < Math.round(averages.fg3m) &&
                        AvgAwayFg3m >= Math.round(averages.fg3m) - 2
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {AvgAwayFg3m.toFixed(2)}
                </td>
                <td>{(AvgAwayFg_pct * 100).toFixed(2) + "%"}</td>
                <td>{(AvgAwayFg3_pct * 100).toFixed(2) + "%"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default HomeAwayTable;
