import React, { useEffect } from 'react';

import { RCCard, RCLoading } from '@rc-shared';
import Grid from '@material-ui/core/Grid';
import { injectSaga } from '@rc-redux';
import { useDispatch, useSelector } from 'react-redux';
import { KEY_ENTRY_LIST } from '@rc-constants';
import PropTypes from 'prop-types';

import saga from './sideeffect';
import sagaDetails from '../entry-details/sideeffect';
import actions from './action';
import { KEY_ENTRY_DETAILS } from '../../../../../data/constants';

const EntryList = ({ posts }) => {
  injectSaga(KEY_ENTRY_LIST, saga);
  injectSaga(KEY_ENTRY_DETAILS, sagaDetails);

  const dispatch = useDispatch();

  const loading = useSelector((state) => state[KEY_ENTRY_LIST] || {})?.loading;

  useEffect(() => {
    dispatch(actions.fetchEntryList());
  }, []);

  const onClickCard = (entryId) => {
    dispatch(actions.openEntryDetails(entryId));
  };
  const onClickDismiss = (entryId) => {
    dispatch(actions.setEntryHidden(entryId));
  };
  const onClickThumbnail = (entryId) => {
    console.log(entryId);
  };

  const renderLoading = () => <RCLoading />;

  const renderData = () => {
    return (
      <>
        <Grid container spacing={2}>
          {posts.map(
            (post) =>
              !post.hidden && (
                <Grid item xs={12} md={12} key={post.id}>
                  <RCCard
                    post={post}
                    callbacks={{
                      onClickCard,
                      onClickDismiss,
                      onClickThumbnail,
                    }}
                  />
                </Grid>
              )
          )}
        </Grid>
      </>
    );
  };

  return loading ? renderLoading() : renderData();
};

EntryList.propTypes = {
  posts: PropTypes.array,
};

export default EntryList;
