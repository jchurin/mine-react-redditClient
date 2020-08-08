import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const RCCard = ({ post }) => {
  const classes = useStyles();

  return (
    <CardActionArea component="a" href="#">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.author}
            </Typography>
            <Typography variant="subtitle2" paragraph>
              {post.created}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={post.image}
            title={post.title}
          />
        </Hidden>
      </Card>
    </CardActionArea>
  );
};

RCCard.propTypes = {
  post: PropTypes.object,
};

export { RCCard };
