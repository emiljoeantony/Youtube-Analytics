import React from 'react';


function VideoFeed() {
    return (
      <div>
        <div className='mb-0 mt-4'>
          <i className='fa fa-newspaper-o'></i> Most Liked Video
        </div>
        <div className='card-columns'>
          <div className='card mb-3'>
            <a href='#'>
              <img
                className='card-img-top img-fluid w-100'
                src=''
                alt='video banner'
              />
            </a>
            <div className='card-body'>
              <h6 className='card-title mb-1'>Video Title</h6>
              <p className='card-text small'>description</p>
            </div>
            <hr className='my-0' />
            <div className='card-body py-2 small'>
              <a className='mr-3 d-inline-block' href='#'>
                35 Likes
              </a>
              <a className='mr-3 d-inline-block' href='#'>
                850 Comments
              </a>
              <a className='d-inline-block' href='#'>
                25 Dislikes
              </a>
            </div>
            <div className='card-footer small text-muted'>
              Posted 32 mins ago
            </div>
          </div>
        </div>
        <div className='mb-0 mt-4'>
          <i className='fa fa-newspaper-o'></i> Most Disliked Video
        </div>
        <div className='card-columns'>
          <div className='card mb-3'>
            <a href='#'>
              <img
                className='card-img-top img-fluid w-100'
                src=''
                alt='video banner'
              />
            </a>
            <div className='card-body'>
              <h6 className='card-title mb-1'>Video Title</h6>
              <p className='card-text small'>description</p>
            </div>
            <hr className='my-0' />
            <div className='card-body py-2 small'>
              <a className='mr-3 d-inline-block' href='#'>
                35 Likes
              </a>
              <a className='mr-3 d-inline-block' href='#'>
                850 Comments
              </a>
              <a className='d-inline-block' href='#'>
                25 Dislikes
              </a>
            </div>
            <div className='card-footer small text-muted'>
              Posted 32 mins ago
            </div>
          </div>
        </div>
      </div>
    );
}

export default VideoFeed
