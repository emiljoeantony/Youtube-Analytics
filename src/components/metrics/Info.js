import React from 'react';

function Info(props) {
  return (
    <div className='youtube-user-top-header'>
      <div className='youtube-user-top-header-background'>
        <img
          src={props.banner}
          alt=''
          title=''
        ></img>
      </div>
      <div className='youtube-user-top-info-wrap'>
        <img
          className='youtube-user-top-info-avatar'
          src={props.thumbnail}
          alt=''
          title=''
        ></img>
        <h1 className='youtube-user-top-info-title'>{props.title}</h1>
        <div className='youtube-user-top-info-block-top'>
          <div className='youtube-user-top-info'>
            <span class='youtube-user-top-light'>Uploads</span>
            <br></br>
            <span className='youtube-stats-header-uploads'>
              {props.videocount}
            </span>
          </div>
          <div className='youtube-user-top-info'>
            <span class='youtube-user-top-light'>Subscribers</span>
            <br></br>
            <span className='youtube-stats-header-uploads'>
              {props.subscribers}
            </span>
          </div>
          <div className='youtube-user-top-info'>
            <span class='youtube-user-top-light'>Video Views</span>
            <br></br>
            <span className='youtube-stats-header-uploads'>{props.views}</span>
          </div>
          <div className='youtube-user-top-info'>
            <span class='youtube-user-top-light'>Country</span>
            <br></br>
            <span className='youtube-stats-header-uploads'>{props.country}</span>
          </div>
          <div className='youtube-user-top-info'>
            <span class='youtube-user-top-light'>Channel Created</span>
            <br></br>
            <span className='youtube-stats-header-uploads'>
              {props.published}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
