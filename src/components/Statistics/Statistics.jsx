// import React, { Component } from 'react';
import PropTypes from 'prop-types';


// class Counter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };


//   countTotalFeedback = () => {
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     const positive = (this.state.good / total) * 100;
//     return positive;
//   }

//   updateGood = () => {
//     this.setState({ good: this.state.good + 1 });
//   };

//   updateNeutral = () => {
//     this.setState({ neutral: this.state.neutral + 1 });
//   };

//   updateBad = () => {
//     this.setState({ bad: this.state.bad + 1 });
//   };
  



//   render() {
//     return (
//       <div>
//         <h2>Please leave feedback</h2>
//         <button type="button" onClick={this.updateGood}>
//           Good
//         </button>
//         <button type="button" onClick={this.updateNeutral}>
//           Neutral
//         </button>
//         <button type="button" onClick={this.updateBad}>
//           Bad
//         </button>
//         <h2>Statistics</h2>
//         <div>
//           good: <b>{this.state.good}</b>
//           neutral: <b>{this.state.neutral}</b>
//           Bad: <b>{this.state.bad}</b>
//           Total: <b>{this.countTotalFeedback()}</b>
//           Positive feedback: <b>{Math.round(this.countPositiveFeedbackPercentage())}%</b>

//         </div>
//       </div>
//     );
//   }
// }



// export default Counter;

// Counter.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// };

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return <div>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {total}</p>
            <p>positive feedback: {positive}%</p>
      </div>; 
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
};
