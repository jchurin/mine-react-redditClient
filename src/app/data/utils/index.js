export const mapEntryList = (list) => {
  return list.map(({ data: entry }) => ({
    id: entry.id,
    title: entry.title,
    author: entry.author,
    created: entry.created,
    image: entry.thumbnail,
    comments: entry.comments,
    visited: entry.visited,
    hidden: entry.hidden,
  }));
};
