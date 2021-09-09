// import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

// export const Header = () => {
//   return (
//     <header>
//       <h1>Task Tracker</h1>
//     </header>
//   );
// };

export const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// CSS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;
