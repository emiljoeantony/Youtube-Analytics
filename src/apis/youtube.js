import axios from 'axios';
const KEY = 'AIzaSyBuYTyO7QREqTaBxvNp6SOuOWtnYNl6iew'; //  youtube API key

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet, statistics, contentDetails, brandingSettings',
    key: KEY,
    maxResults: 50,
  },
});
