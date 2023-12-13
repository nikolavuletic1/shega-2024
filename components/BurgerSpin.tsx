// BurgerSpin.tsx
import React from 'react';
import PropTypes from 'prop-types';

interface BurgerSpinProps {
  isClosed: boolean;
}

const BurgerSpin: React.FC<BurgerSpinProps> = ({ isClosed }) => {
  const barHeight = '14px'; // Adjust the bar height as needed

  const burgerBarStyle: React.CSSProperties = {
    width: '3rem',
    height: barHeight,
    backgroundColor: 'red',
    display: 'inline-block',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.2s',
    top: isClosed ? 10 : `-${barHeight}`,
  };

  const iconStyle: React.CSSProperties = {
    width: '3rem',
    height: '22px',
    backgroundColor: 'gray',
    display: 'inline-block',
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const iconBeforeStyle: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    left: '0',
    transition: 'all 0.2s',
    top: `-${barHeight}`,
  };

  const iconAfterStyle: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    left: '0',
    transition: 'all 0.2s',
    top: `${barHeight}`,
  };

  return (
    <span className={`burger burger-spin ${isClosed ? 'is-closed' : ''}`}>
      <div style={burgerBarStyle}></div>
      <div style={iconStyle}>
        <div style={iconBeforeStyle}></div>
        <div style={iconAfterStyle}></div>
      </div>
      <div style={burgerBarStyle}></div>
    </span>
  );
};

BurgerSpin.propTypes = {
  isClosed: PropTypes.bool.isRequired,
};

export default BurgerSpin;




