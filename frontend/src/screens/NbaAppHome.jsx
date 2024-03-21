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
import Loader from "../components/Loader.jsx";
import BasicLinePlot from "../components/BasicLinePlot.jsx";
import RebLinePlot from "../components/RebLinePlot.jsx";
import AstLinePlot from "../components/AstLinePlot.jsx";
import FgaLinePlot from "../components/FgaLinePlot.jsx";
import TeamAvgTable from "../components/TeamAvgTable.jsx";

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
  const [loadingStats, setLoadingStats] = useState(false);
  const [teamStats, setTeamStats] = useState("");

  const ODDS_API_KEY = "2bbe5b51f58830c70f011626fbea0585";
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

  //console.log(teamStats);

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
        setLoadingStats(true);
        const result_stats = await playerStats(playerData);
        setLoadingStats(false);
        setStats(result_stats.data.data);
        //console.log(isLoadingStats);

        setPlayerTitle(player);

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
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  // useEffect(() => {
  //   if (input.length > 0) {
  //     handleSearch_2();
  //   }
  // }, [input]); // Empty dependency array ensures useEffect runs only once

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
            stats={stats}
            teamStats={teamStats}
            setTeamStats={setTeamStats}
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
        <TeamAvgTable
          teamStats={teamStats}
          stats={stats}
          teams={teams}
          playerTitle={playerTitle}
          averages={averages}
        />
        {stats.length === 0 ? (
          <p className="text-center welcome-text">
            Welcome to Alley-Oop Analytics! This platform is crafted to enhance
            your sports betting decisions by providing comprehensive insights
            into NBA player statistics. Simply begin by typing the name of any
            NBA player, and select from the dropdown menu. Stay tuned for
            ongoing updates as we continue to introduce new features to elevate
            your user experience! *Don't forget to view the visualizations that
            generate beneath the stats table!
          </p>
        ) : loadingStats == true ? (
          <Loader />
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
            loadingStats={loadingStats}
          />
        )}
        {stats.length > 0 && <h1 className="text-center">Visualizations</h1>}
      </div>
      <div className="text-center">
        <div className="row text-center">
          <div className="col-lg-6 text-center">
            <div className="text-center" style={{ overflow: "auto" }}>
              <BasicLinePlot
                averages={averages}
                stats={stats}
                playerTitle={playerTitle}
              />
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="text-center" style={{ overflow: "auto" }}>
              <RebLinePlot
                averages={averages}
                stats={stats}
                playerTitle={playerTitle}
              />
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-lg-6 text-center">
            <div className="text-center" style={{ overflow: "auto" }}>
              <AstLinePlot
                averages={averages}
                stats={stats}
                playerTitle={playerTitle}
              />
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="text-center" style={{ overflow: "auto" }}>
              <FgaLinePlot
                averages={averages}
                stats={stats}
                playerTitle={playerTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
