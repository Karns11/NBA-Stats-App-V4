import React from "react";

const TodaysGames = ({ todaysOdds }) => {
  let weekNum = 20;

  const currentDate = new Date();

  if (currentDate.getDay() === 1) {
    weekNum += 1;
  }

  //console.log(todaysOdds)

  const currentDate2 = new Date();

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const newFormattedDate = currentDate2.toLocaleDateString("en-US", options);

  //console.log(todaysOdds);

  return (
    <div>
      <h1 className="text-center mt-3">Week {weekNum}</h1>
      {todaysOdds && <h5 className="ml-3 pb-4">Upcoming Games </h5>}

      {todaysOdds && <h5 className="ml-3 pb-4">{newFormattedDate}</h5>}
      <div className="container">
        <div className="row">
          {/* {todaysOdds &&
            todaysOdds.map((game, ind) => {
              return (
                <div className="col-md-3 mb-3" key={ind}>
                  <div className="pe-5 text-center border border-dark p-3">
                    <div className="game box">
                      <p>{game.home_team}</p>
                      <p>@</p>
                      <p>{game.away_team} </p>
                    </div>
                  </div>
                </div>
              );
            })} */}

          {todaysOdds.map((match, index) => {
            // Find the outcome object for the away and home teams
            const awayTeamOutcome =
              match.bookmakers[0].markets[0].outcomes.find(
                (outcome) => outcome.name === match.away_team
              );

            const homeTeamOutcome =
              match.bookmakers[0].markets[0].outcomes.find(
                (outcome) => outcome.name === match.home_team
              );

            const awayTeamSpreadOutcome =
              match.bookmakers[0].markets[1].outcomes.find(
                (outcome) => outcome.name === match.away_team
              );

            //console.log(awayTeamSpreadOutcome);

            const homeTeamSpreadOutcome =
              match.bookmakers[0].markets[1].outcomes.find(
                (outcome) => outcome.name === match.home_team
              );

            //console.log(homeTeamSpreadOutcome);

            // Check if both outcome objects are found
            const displayAwayTeamOdds =
              awayTeamOutcome && awayTeamOutcome.price >= 0
                ? `+${awayTeamOutcome.price}`
                : awayTeamOutcome
                ? `${awayTeamOutcome.price}`
                : "Outcome not found";

            //console.log(displayAwayTeamOdds);

            const displayHomeTeamOdds =
              homeTeamOutcome && homeTeamOutcome.price >= 0
                ? `+${homeTeamOutcome.price}`
                : homeTeamOutcome
                ? `${homeTeamOutcome.price}`
                : "Outcome not found";

            const displayAwayTeamSpread =
              awayTeamSpreadOutcome && awayTeamSpreadOutcome.point >= 0
                ? `+${awayTeamSpreadOutcome.point}`
                : awayTeamSpreadOutcome
                ? `${awayTeamSpreadOutcome.point}`
                : "Outcome not found";

            //console.log(displayAwayTeamSpread);

            const displayHomeTeamSpread =
              homeTeamSpreadOutcome && homeTeamSpreadOutcome.point >= 0
                ? `+${homeTeamSpreadOutcome.point}`
                : homeTeamSpreadOutcome
                ? `${homeTeamSpreadOutcome.point}`
                : "Outcome not found";

            //console.log(displayHomeTeamSpread);

            // Check if both outcome objects are found
            const oddsText =
              awayTeamOutcome && homeTeamOutcome ? (
                <div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="text-dark">{match.away_team}</p>
                    </div>
                    <div className="d-flex">
                      <div className="odds-box my-1 mx-1">
                        <p className="my-1">{displayAwayTeamOdds}</p>
                      </div>
                      <div className="odds-box-weird mt-1">
                        <p className="my-1">{displayAwayTeamSpread}</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="text-dark">{match.home_team}</p>
                    </div>
                    <div className="d-flex">
                      <div className="odds-box my-1 mx-1">
                        <p className="my-1">{displayHomeTeamOdds}</p>
                      </div>
                      <div className="odds-box my-1">
                        <p className="my-1">{displayHomeTeamSpread}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                "Outcome not found"
              );

            let first3LettersAwayTeam = match.away_team.substring(0, 3);
            let first3LettersHomeTeam = match.home_team.substring(0, 3);

            // Modify variables based on conditions
            if (first3LettersAwayTeam === "oak") {
              first3LettersAwayTeam = "okc";
            } else if (first3LettersAwayTeam === "las") {
              first3LettersAwayTeam = "la";
            } else if (first3LettersAwayTeam === "gol") {
              first3LettersAwayTeam = "gs";
            }

            if (first3LettersHomeTeam === "oak") {
              first3LettersHomeTeam = "okc";
            } else if (first3LettersHomeTeam === "las") {
              first3LettersHomeTeam = "la";
            } else if (first3LettersHomeTeam === "gol") {
              first3LettersHomeTeam = "gs";
            }

            //Not displaying correct teams
            //const wordAfterSpaceAwayTeam = match.away_team.split(' ')[1];
            //const wordAfterSpaceHomeTeam = match.home_team.split(' ')[1];

            //console.log(first3LettersAwayTeam)

            return (
              <div id="Todays-Games" className="col-md-4 mb-3" key={index}>
                <a
                  className="game-link"
                  rel="noreferrer"
                  target="_blank"
                  href={`https://sportsbook.draftkings.com/leagues/basketball/nba`}
                >
                  <div className="pe-5 text-center border border-dark p-3 game-box">
                    <div className="game box">
                      <div className="game-linky"> {oddsText}</div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodaysGames;
