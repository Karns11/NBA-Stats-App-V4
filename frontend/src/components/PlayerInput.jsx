import React from "react";

// function PlayerInput({ input, setInput, allPlayers }) {
//   return (
//     <div className='column my-2'>
//       <div className='input-group px-5 mb-1'>
//         <span className='input-group-text'>Player</span>
//         <input type='text' className='form-control' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a player...' />
//         <button onClick={() => setInput("")} className='ml-2 btn btn-danger'>Clear</button>
//       </div>
//       <div className='d-flex align-items-center px-5'>
//         <div className={!allPlayers || allPlayers.length === 0 ? "" : `results-box w-100 bg-black d-flex flex-column border border-dark rounded align-items-center justify-content-end`}>
//         {
//           allPlayers && allPlayers.map((player, ind) => {
//             return <div key={ind}>{player.first_name} {player.last_name} - {player.team.abbreviation}</div>
//           })
//         }
//         </div>
//       </div>
//     </div>
//   )
// }

function PlayerInput({ input, setInput, setStats, setPlayer }) {
  return (
    <div className="column my-2">
      <div className="input-group px-5 mb-1">
        <span className="input-group-text">Player</span>
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a player..."
        />
        <button
          onClick={() => {
            setInput("");
            setStats([]);
            setPlayer([]);
          }}
          className="ml-2 btn btn-danger"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default PlayerInput;
