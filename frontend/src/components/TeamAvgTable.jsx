import React from "react";

const TeamAvgTable = ({ teamStats, stats, teams, playerTitle, averages }) => {
  //console.log(teams);
  //console.log(teamStats);

  let theTeamId = null;

  teams.forEach((team) => {
    if (team.full_name === teamStats) {
      theTeamId = team.id;
      //console.log(theTeamId);
    }
  });

  if (teamStats && stats && stats.length > 0) {
    const oppTeamNames = stats.map((stat) => {
      return stat.team.id === stat.game.visitor_team_id
        ? stat.game.home_team_id
        : stat.game.visitor_team_id;
    });

    //console.log(oppTeamNames);

    let finalTeamStats = [];

    stats.forEach((stat) => {
      if (
        oppTeamNames.includes(theTeamId) &&
        (stat.game.visitor_team_id === theTeamId ||
          stat.game.home_team_id === theTeamId)
      ) {
        finalTeamStats.push(stat);
        //console.log(finalTeamStats);
      }
    });

    const AvgPtsVsTeam = (() => {
      // Filter the stats based on your condition
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );

      // Sum the points using reduce
      const sumPts = filteredStats.reduce((total, stat) => total + stat.pts, 0);

      // Calculate the average
      const averagePts = sumPts / filteredStats.length;

      return averagePts;
    })();

    const AvgRebVsTeam = (() => {
      // Filter the stats based on your condition
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );

      // Sum the points using reduce
      const sumReb = filteredStats.reduce((total, stat) => total + stat.reb, 0);

      // Calculate the average
      const averageReb = sumReb / filteredStats.length;

      return averageReb;
    })();

    const AvgAstVsTeam = (() => {
      // Filter the stats based on your condition
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );

      // Sum the points using reduce
      const sumAst = filteredStats.reduce((total, stat) => total + stat.ast, 0);

      // Calculate the average
      const averageAst = sumAst / filteredStats.length;

      return averageAst;
    })();

    const AvgFgaVsTeam = (() => {
      // Filter the stats based on your condition
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );

      // Sum the points using reduce
      const sumFga = filteredStats.reduce((total, stat) => total + stat.fga, 0);

      // Calculate the average
      const averageFga = sumFga / filteredStats.length;

      return averageFga;
    })();

    const AvgFgmVsTeam = (() => {
      // Filter the stats based on your condition
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );

      // Sum the points using reduce
      const sumFgm = filteredStats.reduce((total, stat) => total + stat.fgm, 0);

      // Calculate the average
      const averageFgm = sumFgm / filteredStats.length;

      return averageFgm;
    })();

    const AvgFg3aVsTeam = (() => {
      // Filter the stats based on your condition
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );

      // Sum the points using reduce
      const sumFg3a = filteredStats.reduce(
        (total, stat) => total + stat.fg3a,
        0
      );

      // Calculate the average
      const averageFg3a = sumFg3a / filteredStats.length;

      return averageFg3a;
    })();

    const AvgFg3mVsTeam = (() => {
      // Filter the stats based on your condition
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );

      // Sum the points using reduce
      const sumFg3m = filteredStats.reduce(
        (total, stat) => total + stat.fg3m,
        0
      );

      // Calculate the average
      const averageFg3m = sumFg3m / filteredStats.length;

      return averageFg3m;
    })();

    const AvgMinVsTeam = (() => {
      // Filter the stats based on your condition
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );

      // Sum the points using reduce
      const sumMin = filteredStats.reduce(
        (total, stat) => total + parseInt(stat.min, 10),
        0
      );

      // Calculate the average
      const averageMin = sumMin / filteredStats.length;

      return averageMin;
    })();

    const AvgFg3_pct = (() => {
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );
      const sumFg3a = filteredStats.reduce(
        (total, stat) => total + stat.fg3a,
        0
      ); // Sum the points
      const sumFg3m = filteredStats.reduce(
        (total, stat) => total + stat.fg3m,
        0
      ); // Sum the points
      return sumFg3m / sumFg3a; // Calculate the average
    })();

    const AvgFg_pct = (() => {
      const filteredStats = finalTeamStats.filter(
        (stat) => stat.min !== "00" // Example condition, adjust as needed
      );
      const sumFga = filteredStats.reduce((total, stat) => total + stat.fga, 0); // Sum the points
      const sumFgm = filteredStats.reduce((total, stat) => total + stat.fgm, 0); // Sum the points
      return sumFgm / sumFga; // Calculate the average
    })();

    return (
      <>
        {finalTeamStats.length > 0 ? (
          <div id="L5Avg-table">
            <div className="mt-5 text-center">
              {playerTitle && (
                <h2 className="mt-5">
                  <span style={{ display: "inline-block" }}>
                    {playerTitle.length === 0 ? (
                      <Loader size={45} />
                    ) : (
                      `${playerTitle.first_name} ${playerTitle.last_name} against ${teamStats}`
                    )}
                  </span>{" "}
                </h2>
              )}
            </div>
            {/* remove -test from table-div to get overflow scoll property applied again */}
            <p>{`*Averages in games played against ${teamStats}`}</p>
            <div className="mx-auto table-div-main mb-5">
              {finalTeamStats && finalTeamStats.length > 0 && averages && (
                <table className="table mx-auto">
                  <thead className="table-dark text-center">
                    <tr
                      style={{
                        position: "sticky",
                        top: "0",
                        backgroundColor: "#fff",
                      }}
                    >
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
                      <td className={`fw-bold `}>{AvgMinVsTeam.toFixed(2)}</td>
                      <td className={`fw-bold `}>{AvgPtsVsTeam.toFixed(2)}</td>
                      <td className={`fw-bold `}>{AvgRebVsTeam.toFixed(2)}</td>
                      <td className={`fw-bold `}>{AvgAstVsTeam.toFixed(2)}</td>
                      <td className={`fw-bold `}>{AvgFgaVsTeam.toFixed(2)}</td>
                      <td className={`fw-bold `}>{AvgFgmVsTeam.toFixed(2)}</td>
                      <td className={`fw-bold `}>{AvgFg3aVsTeam.toFixed(2)}</td>
                      <td className={`fw-bold `}>{AvgFg3mVsTeam.toFixed(2)}</td>
                      <td className={`fw-bold `}>
                        {parseFloat(AvgFg_pct * 100).toFixed(2) + "%"}
                      </td>
                      <td className={`fw-bold `}>
                        {parseFloat(AvgFg3_pct * 100).toFixed(2) + "%"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              <p>{`*Box Scores against ${teamStats}`}</p>
              <table className="table mx-auto">
                {finalTeamStats && finalTeamStats.length > 0 && averages && (
                  <thead className="table-dark text-center">
                    <tr
                      style={{
                        position: "sticky",
                        top: "0",
                        backgroundColor: "#fff",
                      }}
                    >
                      <th scope="col">Date</th>
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
                )}

                <tbody>
                  {finalTeamStats &&
                    finalTeamStats.length > 0 &&
                    averages &&
                    finalTeamStats.map((finalTeamStat, index) => {
                      const fg3_pct =
                        finalTeamStat.fg3a !== 0
                          ? (
                              (finalTeamStat.fg3m / finalTeamStat.fg3a) *
                              100
                            ).toFixed(2)
                          : "0.00";

                      const fg_pct =
                        finalTeamStat.fga !== 0
                          ? (
                              (finalTeamStat.fgm / finalTeamStat.fga) *
                              100
                            ).toFixed(2)
                          : "0.00";
                      return (
                        <tr key={index} className="table-light text-center">
                          <td>{finalTeamStat.game.date.substring(5, 10)}</td>
                          <td>{finalTeamStat.min}</td>
                          <td>{finalTeamStat.pts}</td>
                          <td>{finalTeamStat.reb}</td>
                          <td>{finalTeamStat.ast}</td>
                          <td>{finalTeamStat.fga}</td>
                          <td>{finalTeamStat.fgm}</td>
                          <td>{finalTeamStat.fg3a}</td>
                          <td>{finalTeamStat.fg3m}</td>
                          <td>{fg_pct}%</td>
                          <td>{fg3_pct}%</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1 className="text-center">{`No games against ${teamStats}`}</h1>
        )}
      </>
    );
  }
};

export default TeamAvgTable;
