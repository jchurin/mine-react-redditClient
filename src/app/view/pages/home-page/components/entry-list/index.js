import React, { useEffect } from 'react';

import { RCCard, RCLoading } from '@rc-shared';
import Grid from '@material-ui/core/Grid';
import { injectSaga } from '@rc-redux';
import { useDispatch, useSelector } from 'react-redux';
import { KEY_ENTRY_LIST } from '@rc-constants';
import PropTypes from 'prop-types';

import Slide from '@material-ui/core/Slide';
import ReactBnbGallery from 'react-bnb-gallery';
import saga from './sideeffect';
import sagaDetails from '../entry-details/sideeffect';
import actions from './action';
import { KEY_ENTRY_DETAILS } from '../../../../../data/constants';

import 'react-bnb-gallery/dist/style.css';

const EntryList = ({ posts }) => {
  injectSaga(KEY_ENTRY_LIST, saga);
  injectSaga(KEY_ENTRY_DETAILS, sagaDetails);

  const dispatch = useDispatch();

  const { loading, imageGallery } = useSelector(
    (state) => state[KEY_ENTRY_LIST] || {}
  );

  useEffect(() => {
    dispatch(actions.fetchEntryList());
  }, []);

  const onClickCard = (entryId) => {
    dispatch(actions.openEntryDetails(entryId));
  };
  const onClickDismiss = (entryId) => {
    dispatch(actions.setEntryHidden(entryId));
  };
  const onClickThumbnail = (entryImage) => {
    dispatch(actions.setImageGallery(entryImage));
    dispatch(actions.toggleImageGallery());
  };

  const toggleGallery = () => {
    dispatch(actions.toggleImageGallery());
  };

  const renderLoading = () => <RCLoading />;

  const renderData = () => {
    return (
      <>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Slide
              in={!post.hidden}
              key={post.id}
              direction="right"
              unmountOnExit
            >
              <Grid item xs={12} md={12}>
                <RCCard
                  post={post}
                  callbacks={{
                    onClickCard,
                    onClickDismiss,
                    onClickThumbnail,
                  }}
                />
              </Grid>
            </Slide>
          ))}
        </Grid>

        <ReactBnbGallery
          show={imageGallery.open}
          photos={[
            { photo: imageGallery.image, thumbnail: imageGallery.image },
          ]}
          onClose={toggleGallery}
        />
      </>
    );
  };

  return loading ? renderLoading() : renderData();
};

EntryList.propTypes = {
  posts: PropTypes.array,
};

export default EntryList;
