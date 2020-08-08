import axios from 'axios';

const fetchEntryList = async (payload) => {
  const url = `https://www.reddit.com/top/.json?limit=${payload.limit}${
    payload.count ? `&count=${payload.count}` : ''
  }${payload.after ? `&after=${payload.after}` : ''}${
    payload.before ? `&before=${payload.before}` : ''
  }`;
  const { data } = await axios.get(url);
  return data;
};

export default {
  fetchEntryList,
};
