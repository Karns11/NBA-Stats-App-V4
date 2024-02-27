import { all } from "axios";
import React, { useState } from "react";
import Loader from "./Loader";

const SearchResults = ({
  allPlayers,
  setInput,
  input,
  setPlayer,
  handleButtonDisabledClick,
  setAllPlayers,
  setPlayerTitle,
  playerTitle,
  player,
  isLoading,
}) => {
  //console.log(allPlayers);

  return (
    //     <div className='table-container d-flex align-items-center justify-content-center w-100'>
    //       <div className={`table-div w-100`}>
    //         {allPlayers && allPlayers.length > 0 && input.length > 2 && (
    //           <table className='table mx-auto'>
    //             <thead className='table-dark'>
    //               <tr style={{ top: '0', backgroundColor: '#fff' }}>
    //                 <th scope='col'>First</th>
    //                 <th scope='col'>Last </th>
    //                 <th scope='col'>Team</th>
    //                 <th scope='col'>POS</th>
    //               </tr>
    //             </thead>
    //         <tbody className='table-body'>
    //           {allPlayers.map((player, ind) => {
    //             const isEvenRow = ind % 2 === 0;
    //             const rowClassName = isEvenRow ? 'even-row' : 'odd-row';
    //             return (
    //               <tr key={ind} className={`player-result ${rowClassName}`} onClick={(e) => {setInput(`${player.first_name} ${player.last_name}`); handleButtonDisabledClick();}}>
    //                 <td className="column-cell">
    //                   {player.first_name}
    //                 </td>
    //                 <td className="column-cell">
    //                   {player.last_name}
    //                 </td>
    //                 <td className="column-cell">
    //                   {player.team.abbreviation}
    //                 </td>
    //                 <td className="column-cell">
    //                   {player.position}
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //       </table>
    //     )}
    //   </div>
    // </div>

    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          {allPlayers[0] && allPlayers[0].length > 0 && input.length > 2 ? (
            <div className="row justify-content-center">
              <div className="col-md-8">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Team</th>
                      {/* <th scope="col">POS</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {allPlayers[0].map((player, ind) => {
                      const isEvenRow = ind % 2 === 0;
                      const rowClassName = isEvenRow ? "even-row" : "odd-row";
                      return (
                        <tr
                          key={ind}
                          className={`player-result ${rowClassName}`}
                          onClick={(e) => {
                            setInput(
                              `${player.first_name} ${player.last_name}`
                            );
                            setPlayer(player);
                            //setPlayerTitle(player);
                            setAllPlayers([]);
                            handleButtonDisabledClick();
                          }}
                        >
                          <td className="column-cell">{player.first_name}</td>
                          <td className="column-cell">{player.last_name}</td>
                          <td className="column-cell">
                            {player.team.abbreviation}
                          </td>
                          {/* <td className="column-cell">{player.position}</td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            player &&
            Object.keys(player).length > 0 && (
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <table className="table">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Team</th>
                        {/* <th scope="col">POS</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="column-cell">{player.first_name}</td>
                        <td className="column-cell">{player.last_name}</td>
                        <td className="column-cell">
                          {/* {playerTitle.team.abbreviation} */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default SearchResults;
