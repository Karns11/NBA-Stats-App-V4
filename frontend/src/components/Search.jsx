import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

// function Search({ handleSearch, isChecked, handleChecked }) {
//   return (
//     <div>
//       <div className='column'>
//         <button className='mt-3 btn btn-primary' onClick={handleSearch}>Search for stats!</button>
//       </div>
//       <div className='column mt-1'>
//         <input className='ml-2' type='checkbox' onChange={handleChecked} checked={isChecked} />
//         <label className='Cboxlabel' onClick={handleChecked}>Show Current Season Averages</label>
//       </div>
//     </div>
//   )
// }
function Search({
  input,
  isButtonDisabled,
  handleSearch,
  isChecked,
  handleChecked,
  isLastFiveChecked,
  handleLastFiveChecked,
  handleHomeAwayChecked,
  isHomeAwayChecked,
  player,
  stats,
  teamStats,
  setTeamStats,
}) {
  const NBA_TEAMS = [
    "Atlanta Hawks",
    "Boston Celtics",
    "Brooklyn Nets",
    "Charlotte Hornets",
    "Chicago Bulls",
    "Cleveland Cavaliers",
    "Dallas Mavericks",
    "Denver Nuggets",
    "Detroit Pistons",
    "Golden State Warriors",
    "Houston Rockets",
    "Indiana Pacers",
    "LA Clippers",
    "Los Angeles Lakers",
    "Memphis Grizzlies",
    "Miami Heat",
    "Milwaukee Bucks",
    "Minnesota Timberwolves",
    "New Orleans Pelicans",
    "New York Knicks",
    "Oklahoma City Thunder",
    "Orlando Magic",
    "Philadelphia 76ers",
    "Phoenix Suns",
    "Portland Trail Blazers",
    "Sacramento Kings",
    "San Antonio Spurs",
    "Toronto Raptors",
    "Utah Jazz",
    "Washington Wizards",
  ];

  return (
    <div>
      <div className="column">
        <button
          className="mt-3 mb-2 btn btn-primary"
          disabled={!player ? true : isButtonDisabled}
          onClick={handleSearch}
        >
          Search for stats!
        </button>
      </div>
      <div className="column mt-1">
        <input
          className="ml-2"
          type="checkbox"
          onChange={handleChecked}
          checked={isChecked}
        />
        <label className="Cboxlabel ps-2" onClick={handleChecked}>
          Show Current Season Averages
        </label>
      </div>
      <div className="column mt-1">
        <input
          className="ml-2"
          type="checkbox"
          onChange={handleHomeAwayChecked}
          checked={isHomeAwayChecked}
        />
        <label className="Cboxlabel ps-2" onClick={handleHomeAwayChecked}>
          Show Home/Away Averages
        </label>
      </div>
      <div className="column mt-1">
        <input
          className="ml-2"
          type="checkbox"
          onChange={handleLastFiveChecked}
          checked={isLastFiveChecked}
        />
        <label className="Cboxlabel ps-2" onClick={handleLastFiveChecked}>
          Show Last 5 GP Averages
        </label>
      </div>
      {stats && stats.length > 0 && (
        <div className="mt-2">
          <DropdownButton
            data-bs-theme="dark"
            id="dropdown-basic-button"
            title="Player stats vs. team"
            variant="secondary"
          >
            {NBA_TEAMS.map((team, index) => (
              <Dropdown.Item onClick={() => setTeamStats(team)} key={index}>
                {team}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      )}
    </div>
  );
}

export default Search;
