import React, { useState } from 'react';
import classNames from 'classnames';

import s from '../components/FeedbackOptions/FeedbackOptions.module.css';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    const key = evt.target.name;

    switch (key) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        throw new Error(`Unsupported type of ${key}`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? Math.round((100 / total) * good) : 0;
  };

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
      <h2 className={classNames(s.title)}>Please leave feedback 👇</h2>

      <Section title="">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};
