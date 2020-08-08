import axios from 'axios';

const fetchEntryList = async () => {
  const { data } = await axios.get(`https://www.reddit.com/top/.json?limit=50`);
  return data;
};

export default {
  fetchEntryList,
};
