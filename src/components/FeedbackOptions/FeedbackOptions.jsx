import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={classNames(s.box)}>
      {options.map(key => {
        return (
          <li key={key}>
            <button
              type="button"
              name={key}
              onClick={onLeaveFeedback}
              className={classNames(s.button)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          </li>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
