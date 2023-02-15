import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
    <div className="container">
      <h2 className={classNames(s.comp_title)}>{title}</h2>
      {children}
    </div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,  
};

export default Section;
 