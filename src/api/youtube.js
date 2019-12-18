import axios from 'axios';

// GET https://www.googleapis.com/youtube/v3/search
const KEY = process.env.GG_API_KEY;

export const baseParams = {
  part: 'snippet',
  type: 'video',
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});