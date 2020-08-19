import React from 'react';
import PropTypes from 'prop-types';
class Day extends React.Component{
    render(){
        return (
            <div className='container-fluid' style={{width:"300",height:"400",BackgroundColor:"red"}}>
                <h1>{this.props.dayName} </h1>
                <h2>{this.props.dayNumber}</h2>
                <h3>{this.props.monthName}</h3>
            </div>
        );
    }

}

Day.propTypes={
    dayName:PropTypes.string,
    dayNumber:PropTypes.number,
    monthName:PropTypes.string,

};

Day.defaultProps={
dayName:'Someday',
dayNumber:'-1',
monthName:'July',

};
export default Day;