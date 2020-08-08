import React from 'react';
import {
  RCFooter,
  RCBottomNavigation,
  RCHeader,
  RCPagination,
} from '@rc-shared';

import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import { KEY_ENTRY_DETAILS } from '@rc-constants';
import HomePage from '../home-page';

import entryListActions from '../home-page/components/entry-list/action';
import { KEY_ENTRY_LIST } from '../../../data/constants';

const ContainerPage = () => {
  const dispatch = useDispatch();

  const { details } = useSelector((state) => state[KEY_ENTRY_DETAILS] || {});
  const { pagination, list } = useSelector(
    (state) => state[KEY_ENTRY_LIST] || {}
  );

  const dismissEntryList = () => {
    dispatch(entryListActions.hiddenList());
  };

  const buttonsBottomNav = [
    {
      label: 'Dismiss All',
      value: 'dismiss_all',
      icon: <DeleteIcon color="secondary" />,
      callback: dismissEntryList,
    },
  ];

  const changeRowsPerPage = (event) => {
    dispatch(entryListActions.changeRowsPerPage(event.target.value));
    dispatch(entryListActions.fetchEntryList());
  };

  const changePage = (event, page) => {
    dispatch(entryListActions.changePage(page));
    const pointer = pagination.page < page ? 'after' : 'before';
    dispatch(entryListActions.fetchEntryList(pointer));
  };

  return (
    <>
      <Container maxWidth={details ? 'false' : 'lg'}>
        <RCHeader title="Re-edit (a client for Reddit)" />
        <HomePage />
      </Container>
      <RCBottomNavigation buttons={buttonsBottomNav}>
        <RCPagination
          count={pagination?.count}
          page={pagination?.page}
          rowsPerPage={pagination?.rowsPerPage}
          onChangeRowsPerPage={changeRowsPerPage}
          onChangePage={changePage}
          disabled={!list?.length || list?.every((entry) => entry.hidden)}
        />
      </RCBottomNavigation>
      <RCFooter
        title="The End :("
        description="Hope you enjoyed the re-edit client!"
      />
    </>
  );
};

export default ContainerPage;
