import React from 'react';

function Info(props) {
  return (
    <div>
      <section className='channel-banner'>
        <img 
          src={props.banner}
          alt='channel-banner'
          title='Youtube-Channel-Banner'
        ></img>
      </section>
      <section className='channel-info'>
        <div className='info-container'>
          <div className='channel-avatar'>
            <img
              className='youtube-user-top-info-avatar'
              src={props.thumbnail}
              alt=''
              title=''
            ></img>
          </div>
          <div className='channel-title'>
            <h1>{props.title}</h1>
            <div class='channel-subscriber-count'></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
