import { Component } from 'react';
import classNames from 'classnames';

import s from '../components/FeedbackOptions/FeedbackOptions.module.css';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback(evt) {
    let key = evt.target.name;
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round((100 / total) * good) : 0;

    // const positiveFeedback = this.state.good * this.countTotalFeedback();   // також працює 💚
    // return positiveFeedback.toFixed(2)*100;  // також працює 💚
  }

  render() {
    const keys = Object.keys(this.state);
    const { good, bad, neutral } = this.state;

    return (
      <div
        className="container"
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '20px',
          color: '#010101',
        }}
      >
        {/* <h3>React 🛠 homework template 🙀</h3> */}
        <h2 className={classNames(s.title)}>Please leave feedback 👇</h2>

        <Section title="">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback.bind(this)}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics"> 
        {
          this.countTotalFeedback() === 0 ? 
          <Notification message="There is no feedback"></Notification> : 
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
        }

        </Section>
      </div>
    );
  }
}
