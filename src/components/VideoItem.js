import React from 'react';
import '../style/video.css';

var numberWithCommas = (n) => {
  return n
    .toLocaleString('en-IN', { maximumSignificantDigits: 3 })
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const VideoItem = ({ video, handleVideoSelect }) => {
  const { snippet, statistics } = video;
  const { title, publishedAt } = snippet;
  const { likeCount, dislikeCount, viewCount } = statistics;
  

  return (
    <tr onClick={() => handleVideoSelect(video)} className='videoList'>
      <td>{title}</td>
      <td>{new Date(publishedAt).toDateString()}</td>
      <td>{numberWithCommas(likeCount)}</td>
      <td>{numberWithCommas(dislikeCount)}</td>
      <td>{numberWithCommas(viewCount)}</td>
    </tr>
  );
};;
export default VideoItem;
