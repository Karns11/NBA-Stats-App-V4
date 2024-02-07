import React from "react";

// function DateInput({ StartDateInput, setStartDateInput, handleStartDateReset, endDateInput, setEndDateInput, handleEndDateReset }) {
//   return (
//     <div className='column'>
//   <div className="row">
//     <div className="col-6">
//       <div className="input-group px-5">
//         <span className="input-group-text input-group-text-date">Start Date</span>
//         <input type="text" className="form-control" value={StartDateInput} onChange={(e) => setStartDateInput(e.target.value)} placeholder='YYYY-MM-DD' />
//         <button onClick={handleStartDateReset} className='btn btn-danger ml-2'>Reset</button>
//       </div>
//     </div>
//     <div className="col-6">
//       <div className="input-group px-5">
//         <span className='input-group-text input-group-text-date'>End Date</span>
//         <input type="text" className="form-control" value={endDateInput} onChange={(e) => setEndDateInput(e.target.value)} placeholder='YYYY-MM-DD' />
//         <button onClick={handleEndDateReset} className='btn btn-danger ml-2'>Reset</button>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

function DateInput({
  StartDateInput,
  setStartDateInput,
  handleStartDateReset,
  endDateInput,
  setEndDateInput,
  handleEndDateReset,
}) {
  return (
    <div className="column">
      <div className="input-group px-5 mb-4">
        <span className="input-group-text">Since Date</span>
        <input
          type="text"
          className="form-control"
          value={StartDateInput}
          onChange={(e) => setStartDateInput(e.target.value)}
          placeholder="YYYY-MM-DD"
        />
        <button onClick={handleStartDateReset} className="ml-2 btn btn-danger">
          Reset
        </button>
      </div>
      {/* <div className="input-group px-5 mt-3">
      <span className='input-group-text'>End Date</span>
      <input type="text" className="form-control" value={endDateInput} onChange={(e) => setEndDateInput(e.target.value)} placeholder='YYYY-MM-DD' />
      <button onClick={handleEndDateReset} className='ml-2 btn btn-danger'>Reset</button>
    </div> */}
    </div>
  );
}

export default DateInput;
