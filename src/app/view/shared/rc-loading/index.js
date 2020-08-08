import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  wrapper: {},
}));

const RCLoading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh' }}
      >
        <Grid item md={3} xs={3}>
          <CircularProgress className={classes.wrapper} />
        </Grid>
      </Grid>
    </div>
  );
};

export { RCLoading };
