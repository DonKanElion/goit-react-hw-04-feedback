import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={classNames(s.list)}>
      <li className={classNames(s.item)}>Good: {good}</li>
      <li className={classNames(s.item)}>Neutral: {neutral} </li>
      <li className={classNames(s.item)}>Bad: {bad}</li>
      <li className={classNames(s.item)}>Total: {total} </li>
      <li className={classNames(s.item)}>
        Positive feedbasck: {positivePercentage} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
