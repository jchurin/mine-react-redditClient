import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const RCDivider = () => {
  const classes = useStyles();

  return <Divider className={classes.divider} />;
};

export { RCDivider };
