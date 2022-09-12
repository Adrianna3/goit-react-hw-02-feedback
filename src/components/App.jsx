import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positive = Math.round((this.state.good / total) * 100);
    // console.log(positivePercentage)
    return isNaN(positive) ? 0 : positive;
  };

  updateGood = () => {
 this.setState(oldState => ({ ...oldState, good: oldState.good + 1 }));
  };

  updateNeutral = () => {
    this.setState(oldState => ({ ...oldState, neutral: oldState.neutral + 1 }));  };

  updateBad = () => {
this.setState(oldState => ({ ...oldState, bad: oldState.bad + 1 }));  };

  // updateFields = key => {
  //   console.log('idzie');
  //   this.setState({ [key]: this.state[key] + 1 });
  // };

  render() {
    return (
      <div>
        <Section tittle="Please leave feedback">
          <div style={{ display: 'flex' }}>
            <FeedbackOption
              options={'good'}
              onLeaveFeedback={this.updateGood}
            />
            <FeedbackOption
              options={'neutral'}
              onLeaveFeedback={this.updateNeutral}
            />
            <FeedbackOption options={'bad'} onLeaveFeedback={this.updateBad} />
          </div>
        </Section>

        <Section tittle="Statistics">
          <div>
            {this.countTotalFeedback() !== 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positive={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
