const API_KEY = process.env.REACT_APP_API_KEY;

const YOUTUBE_API_LINK =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + API_KEY;

export default YOUTUBE_API_LINK;