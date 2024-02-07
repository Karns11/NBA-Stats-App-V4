import React from "react";

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
}) {
  return (
    <div>
      <div className="column">
        <button
          className="mt-3 mb-2 btn btn-primary"
          disabled={input.length < 3 ? true : isButtonDisabled}
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
    </div>
  );
}

export default Search;
