import moment from 'moment';

export const mapEntryList = (list) => {
  return list.map(({ data: entry }) => ({
    id: entry.id,
    title: entry.title,
    author: entry.author,
    created: entry.created,
    image: entry.url,
    thumbnail: entry.thumbnail,
    comments: entry.num_comments,
    visited: entry.visited,
    hidden: entry.hidden,
  }));
};

export const getFromNowByDate = (timestamp) =>
  moment(timestamp * 1000).fromNow();

export const getFormatedComments = (comments) => {
  if (comments > 1000) {
    return `${(comments / 1000).toFixed(0)}K`;
  }
  return comments;
};
