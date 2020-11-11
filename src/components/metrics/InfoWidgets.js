import React from 'react';
import Graph from '../Graph';
import BarChart from '../BarChart';
import VideoFeed from '../VideoFeed';
import VideoList, { columns, Table } from '../VideoList';


import CountUp from 'react-countup';

function InfoWidgets(props) {
  return (
    <div className='content-wrapper'>
      <div className='container-fluid'>
        <div class='cover-profile'>
          <div class='cover-image'>
            <img src={props.banner} alt='Channel Banner' />
          </div>
          <div class='profile-image'>
            <img src={props.thumbnail} alt='Channel Avatar' />
          </div>
        </div>
        <div class='row'>
          <div class='col-xl-3 col-sm-6 mb-3'>
            <div class='card text-white bg-primary o-hidden h-100'>
              <div class='card-body'>
                <div class='card-body-icon'>
                  <i class='fas fa-upload'></i>
                </div>
                <div class='mr-5'>
                  <span className='info-num'>
                    <CountUp
                      start={0}
                      end={props.videocount}
                      duration={2.5}
                      separator=','
                    />
                  </span>
                </div>
              </div>
              <a class='card-footer text-white clearfix  z-1'>
                <span class='float-left'>Uploads</span>
              </a>
            </div>
          </div>
          <div class='col-xl-3 col-sm-6 mb-3'>
            <div class='card text-white bg-warning o-hidden h-100'>
              <div class='card-body'>
                <div class='card-body-icon'>
                  <i class='fas fa-users'></i>
                </div>
                <div class='mr-5'>
                  <span className='info-num'>
                    <CountUp
                      start={0}
                      end={props.subscribers}
                      duration={2.5}
                      separator=','
                    />
                  </span>
                </div>
              </div>
              <a class='card-footer text-white clearfix  z-1'>
                <span class='float-left'>Subscribers</span>
              </a>
            </div>
          </div>
          <div class='col-xl-3 col-sm-6 mb-3'>
            <div class='card text-white bg-success o-hidden h-100'>
              <div class='card-body'>
                <div class='card-body-icon'>
                  <i class='fas fa-eye'></i>
                </div>
                <div class='mr-5'>
                  <span className='info-num'>
                    <CountUp
                      start={0}
                      end={props.views}
                      duration={2.5}
                      separator=','
                    />
                  </span>
                </div>
              </div>
              <a class='card-footer text-white clearfix  z-1'>
                <span class='float-left'>Views</span>
              </a>
            </div>
          </div>
          <div class='col-xl-3 col-sm-6 mb-3'>
            <div class='card text-white bg-danger o-hidden h-100'>
              <div class='card-body'>
                <div class='card-body-icon'>
                  <i class='fas fa-user-plus'></i>
                </div>
                <div class='mr-5'>
                  <span className='info-num'>{props.published}</span>
                </div>
              </div>
              <a class='card-footer text-white clearfix  z-1'>
                <span class='float-left'>Channel Created</span>
              </a>
            </div>
          </div>
        </div>
        <Graph />
        <BarChart />
        <VideoFeed />
      </div>
    </div>
  );
}

export default InfoWidgets;
