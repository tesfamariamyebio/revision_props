import React from 'react';
import Day from './components/Day';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';

class App extends React.Component{
render(){
  return (
<div className="container-fluid">
  <div className='row'>
    <div className='col-4'>
      <Day 
      dayName='Thursday' 
      dayNumber='8'
      monthName='July'/>
    </div>

    <div className='col-4 bg-success text-white border' >
      <Day dayName='Friday' 
      dayNumber='9'
      monthName='July'
      />
    </div>
    <div className='col-4  bg-danger text-white'>
      <Day
      dayName="Saturday"
      dayNumber='10'
      monthName="July"
      />
    </div>
  </div>
</div>
  );
}
}
export default App;