import React from "react";
import Loader from "./Loader";

function AvgTable({ averages, player, isChecked, stats, year, playerTitle }) {
  if (isChecked && stats.length > 0) {
    //console.log(averages);
    return (
      <div id="Avg-table">
        <div className="mt-5 text-center">
          {playerTitle && (
            <h2 className="mt-5">
              <span style={{ display: "inline-block" }}>
                {playerTitle.length === 0 ? (
                  <Loader size={45} />
                ) : (
                  `${playerTitle.first_name} ${playerTitle.last_name} Averages`
                )}
              </span>
            </h2>
          )}
        </div>
        <div className="mx-auto mb-5 table-div">
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
                <td>{averages.games_played}</td>
                <td>{averages.min}</td>
                <td>{averages.pts}</td>
                <td>{averages.reb}</td>
                <td>{averages.ast}</td>
                <td>{averages.fga}</td>
                <td>{averages.fgm}</td>
                <td>{averages.fg3a}</td>
                <td>{averages.fg3m}</td>
                <td>{(averages.fg_pct * 100).toFixed(2) + "%"}</td>
                <td>{(averages.fg3_pct * 100).toFixed(2) + "%"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  //   return (
  //     <div>
  //       <div className='text-center'>
  //         {player.length===2 && <h2>Showing results for <i>{player[0] + " " + player[1]}</i></h2>}
  //       </div>
  //       <div className='mx-auto table-div'>
  //         <table className='table mx-auto'>
  //             <thead>
  //               <tr style={{position: 'sticky', top: '0', backgroundColor: '#fff'}}>
  //                 <th scope='col'>GP</th>
  //                 <th scope='col'>Min</th>
  //                 <th scope='col'>FGM</th>
  //                 <th scope='col'>FG3M</th>
  //                 <th scope='col'>REB</th>
  //                 <th scope='col'>AST</th>
  //                 <th scope='col'>STL</th>
  //                 <th scope='col'>BLK</th>
  //                 <th scope='col'>FG%</th>
  //                 <th scope='col'>3FG%</th>
  //                 <th scope='col'>PTS</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //                 <tr>
  //                     <td>{averages.games_played}</td>
  //                     <td>{averages.min}</td>
  //                     <td>{averages.fgm}</td>
  //                     <td>{averages.fg3m}</td>
  //                     <td>{averages.reb}</td>
  //                     <td>{averages.ast}</td>
  //                     <td>{averages.stl}</td>
  //                     <td>{averages.blk}</td>
  //                     <td>{(averages.fg_pct * 100).toFixed(2) + "%"}</td>
  //                     <td>{(averages.fg3_pct * 100).toFixed(2) + "%"}</td>
  //                     <td>{averages.pts}</td>
  //                 </tr>
  //             </tbody>
  //           </table>
  //         </div>
  //     </div>
  //   )
}

export default AvgTable;
