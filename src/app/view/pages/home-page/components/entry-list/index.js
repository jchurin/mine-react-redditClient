import React from 'react';

import { RCMainCard, RCCard, RCDivider } from '@rc-shared';
import Grid from '@material-ui/core/Grid';

const EntryList = ({ posts }) => {
  return (
    <>
      <RCMainCard post={posts[0]} />
      <Grid container spacing={4}>
        {posts.slice(1, 3).map((post) => (
          <Grid item xs={12} md={6} key={post.title}>
            <RCCard post={post} />
          </Grid>
        ))}
      </Grid>
      <RCDivider />
      <Grid container spacing={2}>
        {posts.slice(3).map((post) => (
          <Grid item xs={12} md={12} key={post.title}>
            <RCCard key={post.title} post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default EntryList;
