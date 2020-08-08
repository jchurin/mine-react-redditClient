import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { getFromNowByDate, getFormatedComments } from '../../../data/utils';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: theme.spacing(4),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 250,
  },
}));

const RCCard = ({ post, callbacks }) => {
  const classes = useStyles();

  const onClickCard = () => {
    callbacks.onClickCard(post.id);
  };
  const onClickDismiss = () => {
    callbacks.onClickDismiss(post.id);
  };
  const onClickThumbnail = () => {
    callbacks.onClickThumbnail(post.image || post.thumbnail);
  };

  return (
    <CardActionArea component="span">
      <Card className={classes.card}>
        <Hidden xsDown>
          <Button
            color="secondary"
            aria-label="Dismiss"
            component="span"
            onClick={onClickDismiss}
          >
            <DeleteIcon />
          </Button>
        </Hidden>

        <div className={classes.cardDetails}>
          <CardContent onClick={onClickCard}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography
                  component="h2"
                  variant="h5"
                  color={post.visited ? 'primary' : ''}
                >
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.author}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container>
                  <Grid item xs={4} md={4}>
                    <Typography variant="subtitle2">
                      {getFormatedComments(post.comments)} Comments
                    </Typography>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Typography variant="subtitle2" paragraph>
                      {getFromNowByDate(post.created)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={post.thumbnail}
            title={post.title}
            onClick={onClickThumbnail}
          />
        </Hidden>
      </Card>
    </CardActionArea>
  );
};

RCCard.propTypes = {
  post: PropTypes.object,
  callbacks: PropTypes.shape({
    onClickCard: PropTypes.func,
    onClickDismiss: PropTypes.func,
    onClickThumbnail: PropTypes.func,
  }),
};

export { RCCard };
