import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigationAction, BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: '#e0e0e0',
  },
});

const RCBottomNavigation = ({ buttons, children }) => {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={null}
      onChange={() => null}
      className={classes.stickToBottom}
    >
      {children}
      {buttons.map((button) => (
        <BottomNavigationAction
          key={button.label}
          label={button.label}
          value={button.value}
          icon={button.icon}
          color={button.color}
          onClick={button.callback}
        />
      ))}
    </BottomNavigation>
  );
};

RCBottomNavigation.propTypes = {
  buttons: PropTypes.array,
};

export { RCBottomNavigation };
