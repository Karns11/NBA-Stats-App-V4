//NEED TO FIX SLICE TO SEARCH FOR PLAYER. THE BACKEND CODE IS WORKING FINE

import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table.jsx";
import PlayerInput from "../components/PlayerInput.jsx";
import DateInput from "../components/DateInput.jsx";
import Search from "../components/Search.jsx";
import AvgTable from "../components/AvgTable.jsx";
import SearchResults from "../components/SearchResults.jsx";
import LastFiveAvg from "../components/LastFiveAvg.jsx";
import TodaysGames from "../components/TodaysGames.jsx";
import HomeAwayTable from "../components/HomeAwayTable.jsx";
import DK from "../assets/DKLogo.png";
import { useSearchPlayerMutation } from "../slices/usersApiSlice";
import { usePlayerStatsMutation } from "../slices/usersApiSlice";
import { usePlayerSeasonAvgMutation } from "../slices/usersApiSlice";
import { useAllTeamsMutation } from "../slices/usersApiSlice";

export default function Home() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1 to get the actual month number
  const currentYear = currentDate.getFullYear();

  const displayYear =
    currentMonth >= 1 && currentMonth <= 8 ? currentYear - 1 : currentYear;

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [stats, setStats] = useState([]);
  const [player, setPlayer] = useState([]);
  const [playerTitle, setPlayerTitle] = useState([]);
  //const [playerId, setPlayerId] = useState("");
  const [input, setInput] = useState("");
  const [StartDateInput, setStartDateInput] = useState("2023-10-24"); //need to update very year!!!!
  const [endDateInput, setEndDateInput] = useState(formattedDate);
  const [isChecked, setIsChecked] = useState(false);
  const [isLastFiveChecked, setIsLastFiveChecked] = useState(false);
  const [isHomeAwayChecked, setIsHomeAwayChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [averages, setAverages] = useState({});
  const [teams, setTeams] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);
  //const [todaysGames, setTodaysGames] = useState([]);
  const [todaysOdds, setTodaysOdds] = useState([]);

  const ODDS_API_KEY = "216f6eccca571511c81d63a2f4795d07";
  const currentDate2 = new Date();
  currentDate2.setDate(currentDate2.getDate() + 1);
  const usefulFormattedDate = currentDate2.toISOString().substring(0, 10);
  //console.log(usefulFormattedDate)

  const currentDate3 = new Date();
  currentDate3.setDate(currentDate3.getDate());
  const usefulFromDate = currentDate3.toISOString().substring(0, 10);
  //console.log(usefulFromDate)

  const [searchPlayer, { isLoading, error }] = useSearchPlayerMutation();
  const [playerStats, { isLoadingStats, errorStats }] =
    usePlayerStatsMutation();
  const [playerSeasonAvg, { isLoadingSeasonAvg, errorSeasonAvg }] =
    usePlayerSeasonAvgMutation();
  const [allteams, { isLoadingAllTeams, errorAllTeams }] =
    useAllTeamsMutation();

  const handleSearch_2 = async () => {
    try {
      //console.log(player);
      //const result = await searchPlayer({ basketball_player: input });
      //console.log(result.data.data);
      // setPlayer([
      //   result.data.data[0].first_name,
      //   result.data.data[0].last_name,
      // ]);
      if (player) {
        const playerData = {
          playerId: player.id,
          StartDateInput,
        };
        const result_stats = await playerStats(playerData);
        console.log(isLoadingStats);
        //console.log(result_stats.data.data);
        setStats(result_stats.data.data);
        //console.log(isLoadingStats);

        const playerAvgData = {
          playerId: player.id,
          season: displayYear,
        };
        const result_seasonAvg = await playerSeasonAvg(playerAvgData);
        //console.log(result_seasonAvg.data.data);
        setAverages(result_seasonAvg.data.data[0]);

        const result_allTeams = await allteams();
        //console.log(result_allTeams.data.data);
        setTeams(result_allTeams.data.data);
      }

      setIsButtonDisabled(true);
      setPlayerTitle(player);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  // useEffect(() => {
  //   if (input.length > 0) {
  //     handleSearch_2();
  //   }
  // }, [input]); // Empty dependency array ensures useEffect runs only once

  async function handleSearch() {
    //event.preventDefault();
    if (input.length > 0) {
      // axios
      //   .get(`https://www.balldontlie.io/api/v1/players?search=${input}`)
      //   .then((response) => {
      //     setPlayer([
      //       response.data.data[0].first_name,
      //       response.data.data[0].last_name,
      //     ]);
      //     const playerId = response.data.data[0].id;
      //     return axios.get(
      //       `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}&per_page=100&start_date=${StartDateInput}`
      //     ); //&end_date=${endDateInput} if necessary.
      //   })
      //   .then((response) => {
      //     const responseStats = response.data.data;
      //     setStats(responseStats);
      //     //console.log(responseStats);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // axios
      //   .get(`https://www.balldontlie.io/api/v1/players?search=${input}`)
      //   .then((response) => {
      //     setPlayer([
      //       response.data.data[0].first_name,
      //       response.data.data[0].last_name,
      //     ]);
      //     const playerId = response.data.data[0].id;
      //     return axios.get(
      //       `https://www.balldontlie.io/api/v1/season_averages/?player_ids[]=${playerId}`
      //     );
      //   })
      //   .then((res) => {
      //     const resAvgs = res.data.data[0];
      //     //console.log(resAvgs.fg_pct);
      //     setAverages(resAvgs); //object
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // axios
      //   .get("https://www.balldontlie.io/api/v1/teams")
      //   .then((response) => {
      //     setTeams(response.data.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // setAllPlayers([])
    }
  }

  const handleStartDateReset = () => {
    setStartDateInput("2023-01-01");
  };

  const handleEndDateReset = () => {
    setEndDateInput(formattedDate);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleLastFiveChecked = () => {
    setIsLastFiveChecked(!isLastFiveChecked);
  };

  const handleHomeAwayChecked = () => {
    setIsHomeAwayChecked(!isHomeAwayChecked);
  };

  const handleButtonDisabledClick = () => {
    setIsButtonDisabled(false);
  };

  //const todays_date = "2024-01-16"

  // const handleAllPlayerSearch= (input)=> {
  //     axios.get(`http://api.balldontlie.io/v1/players?search=${input}`)
  //     .then(response => {
  //       setAllPlayers(response.data.data)
  //       console.log(allPlayers)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // const handleAllPlayerSearch = async (input) => {
  //   try {
  //     const result_allPlayers = await searchPlayer({
  //       basketball_player: input,
  //     });
  //     //console.log(result_allPlayers.data.data);
  //     setAllPlayers([result_allPlayers.data.data]);
  //   } catch (error) {
  //     console.error("Error occurred:", error);
  //   }
  // };

  useEffect(() => {
    const handleAllPlayerSearch = async (input) => {
      try {
        const result_allPlayers = await searchPlayer({
          basketball_player: input,
        });
        //console.log(result_allPlayers.data.data);
        setAllPlayers([result_allPlayers.data.data]);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    if (input.length > 3) {
      handleAllPlayerSearch(input);
    } else {
      setAllPlayers([]);
    }
    // eslint-disable-next-line
  }, [input]);

  useEffect(() => {
    axios
      .get(
        `https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=${ODDS_API_KEY}&regions=us&markets=h2h,spreads&oddsFormat=american&commenceTimeFrom=${usefulFromDate}T00:00:00Z&commenceTimeTo=${usefulFormattedDate}T03:30:00Z`
      )
      .then((response) => {
        //console.log(response.data)
        setTodaysOdds(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [usefulFormattedDate, usefulFromDate]);

  return (
    <div id="Home">
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/odds" component={Odds} />
        </Routes>
      </BrowserRouter> */}
      <div className="container">
        <TodaysGames todaysOdds={todaysOdds} />
        {/* <h1 className='text-center pt-3'>{StartDateInput.substring(0,4)}-{endDateInput.substring(0,4)} Season Stats</h1> */}
        <div className="d-flex align-items-center justify-content-center">
          {todaysOdds.length > 0 && (
            <h5 className="text-center me-3">Odds Powered By</h5>
          )}
          <div>
            {todaysOdds.length > 0 && <img className="dk-logo" src={DK} />}
          </div>
        </div>
        {todaysOdds.length > 0 && (
          <div className="border border-dark mt-5 mb-3"></div>
        )}

        <h1 id="NBA-Stats" className="text-center pt-4">
          NBA Player Stats{" "}
        </h1>

        <div className="row text-center my-5">
          <PlayerInput
            handleSearch={handleSearch}
            setStats={setStats}
            setPlayer={setPlayer}
            input={input}
            setInput={setInput}
            setPlayerTitle={setPlayerTitle}
          />
          <DateInput
            handleEndDateReset={handleEndDateReset}
            endDateInput={endDateInput}
            setEndDateInput={setEndDateInput}
            handleStartDateReset={handleStartDateReset}
            StartDateInput={StartDateInput}
            setStartDateInput={setStartDateInput}
          />
          <SearchResults
            handleButtonDisabledClick={handleButtonDisabledClick}
            input={input}
            allPlayers={allPlayers}
            setInput={setInput}
            setPlayer={setPlayer}
            setAllPlayers={setAllPlayers}
            setPlayerTitle={setPlayerTitle}
            playerTitle={playerTitle}
            player={player}
            isLoading={isLoading}
          />
          <Search
            input={input}
            isButtonDisabled={isButtonDisabled}
            isChecked={isChecked}
            handleChecked={handleChecked}
            isLastFiveChecked={isLastFiveChecked}
            handleLastFiveChecked={handleLastFiveChecked}
            handleSearch={handleSearch_2}
            isHomeAwayChecked={isHomeAwayChecked}
            handleHomeAwayChecked={handleHomeAwayChecked}
            player={player}
          />
          <div className="border border-dark mt-3"></div>
        </div>
        <AvgTable
          year={year}
          stats={stats}
          isChecked={isChecked}
          averages={averages}
          player={player}
          playerTitle={playerTitle}
        />
        <HomeAwayTable
          averages={averages}
          player={player}
          stats={stats}
          isHomeAwayChecked={isHomeAwayChecked}
          handleHomeAwayChecked={handleHomeAwayChecked}
          playerTitle={playerTitle}
        />
        <LastFiveAvg
          averages={averages}
          teams={teams}
          year={year}
          stats={stats}
          isLastFiveChecked={isLastFiveChecked}
          player={player}
          playerTitle={playerTitle}
        />
        {stats.length === 0 ? (
          <p className="text-center welcome-text">
            Welcome to Alley-Oop Analytics! This platform is crafted to enhance
            your sports betting decisions by providing comprehensive insights
            into NBA player statistics. Simply begin by typing the name of any
            NBA player, and select from the dropdown menu. To further refine
            your search, specify a start date to narrow down the selection of
            games you want to view. Opt for the season average checkbox if you
            wish to explore a player's season averages. Stay tuned for ongoing
            updates as we continue to introduce new features to elevate your
            user experience!
          </p>
        ) : (
          <Table
            averages={averages}
            input={input}
            teams={teams}
            player={player}
            stats={stats}
            playerTitle={playerTitle}
            isLoadingStats={isLoadingStats}
            isLoadingAllTeams={isLoadingAllTeams}
          />
        )}
      </div>
    </div>
  );
}
