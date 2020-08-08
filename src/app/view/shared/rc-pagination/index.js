import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { TablePagination } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const RCPagination = ({
  count,
  page,
  onChangePage,
  rowsPerPage,
  onChangeRowsPerPage,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TablePagination
        component="div"
        count={count}
        page={page}
        onChangePage={onChangePage}
        rowsPerPage={[rowsPerPage]}
        onChangeRowsPerPage={onChangeRowsPerPage}
        disabled={disabled}
      />
    </div>
  );
};

RCPagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  disabled: PropTypes.bool,
};

export { RCPagination };
