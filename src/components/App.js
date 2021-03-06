import React from 'react';
import youtube from '../apis/youtube';
import Form from './Form';
import Results from './Results';
import VideoList, { columns, Table } from './VideoList';
import InfoWidgets from './metrics/InfoWidgets';

import SideBar from './SideBar';
import Graph from './Graph';
import Info from './metrics/Info';
import MainSection from './MainSection';
import VideoFeed from './VideoFeed';


// import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    inputFromSearchbar: '',
    videos: [],
    videoList: [],
    selectedVideo: null,
    title: '',
    channelTitle: '',
    description: '',
    channelId: '',
    views: '',
    likes: '',
    dislikes: '',
    published: '',
    subscribers: '',
    videocount: '',
    playListItems: '',
    country: '',
    videoIds: [],
    videoids: [],
    loading: false,
    pageCount: -1,
    nextPageToken: '',
    channelVideoIds: '',
    playlistid: '',
    displayedVideos: [],
    thumbnail: '',
    banner: '',
  };

  fetchIdRef = React.createRef(0);

  handleSubmit = async (inputFromSearchbar) => {
    const response = await youtube.get('/channels', {
      params: {
        id: inputFromSearchbar,
      },
    });
    console.log('response is:', response.data);

    const playlistId =
      response.data.items[0].contentDetails.relatedPlaylists.uploads;

    this.setState({
      banner: response.data.items[0].brandingSettings.image.bannerImageUrl,

      thumbnail: response.data.items[0].snippet.thumbnails.medium.url,
      country: response.data.items[0].brandingSettings.channel.country,

      description: response.data.items[0].snippet.description,
      published: response.data.items[0].snippet.publishedAt,
      title: response.data.items[0].snippet.title,

      views: response.data.items[0].statistics.viewCount,
      likes: response.data.items[0].statistics.likeCount,
      dislikes: response.data.items[0].statistics.dislikeCount,
      videocount: response.data.items[0].statistics.videoCount,
      subscribers: response.data.items[0].statistics.subscriberCount,
      playlistid:
        response.data.items[0].contentDetails.relatedPlaylists.uploads,
    });
    console.log('this is resp', response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  //used to add comma structure to the numbers

  numberWithCommas = (n) => {
    return n
      .toLocaleString('en-IN', { maximumSignificantDigits: 3 })
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  fetchData = async ({ pageSize, pageIndex }) => {
    if (this.state.loading) return;
    console.log(pageIndex, pageSize);
    if (pageIndex * pageSize < this.state.videos.length) {
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;

      const displayedVideos = this.state.videos.slice(startRow, endRow);

      this.setState({
        displayedVideos,
      });
      return;
    }
    // Set the loading state
    console.log(this.state);
    this.setState({
      loading: true,
    });

    // This will get called when the table needs new data

    // Give this fetch an ID
    const playlist = await youtube.get('/playlistItems', {
      params: {
        part: 'contentDetails',

        pageToken: this.state.nextPageToken,

        playlistId: this.state.playlistid,
      },
    });

    this.setState({
      nextPageToken: playlist.data.nextPageToken,
    });

    const newArray = playlist.data.items;
    console.log('new array is:', newArray);

    const y = newArray.map((item) => {
      return item.contentDetails.videoId;
    });
    console.log(y);

    const x = y.join();
    console.log(x);

    const videodetails = await youtube.get('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',

        id: x,
      },
    });

    const startRow = pageSize * pageIndex;
    const endRow = startRow + pageSize;

    const pageArray = [...this.state.videos, ...videodetails.data.items];

    const displayedVideos = pageArray.slice(startRow, endRow);

    console.log(videodetails.data.items.length, pageSize);

    this.setState({
      videos: pageArray,
      displayedVideos,
      pageCount:
        Math.ceil(pageArray.length / pageSize) +
        (pageSize === videodetails.data.items.length ? 1 : 0),
    });

    this.setState({
      loading: false,
    });
  };
  render;

  render() {
    if (this.state.playlistid === '') {
      return (
        <main className='fixed-nav sticky-footer bg-dark' id='page-top'>
          <SideBar handleFormSubmit={this.handleSubmit} />

          
        </main>
      );
    }
    const data = this.state.displayedVideos.map((item) => {
      return {
        title: item.snippet.title,
        publishedAt: new Date(item.snippet.publishedAt).toDateString(),
        viewCount: this.numberWithCommas(item.statistics.viewCount),
        likeCount: item.statistics.likeCount,
        dislikeCount: item.statistics.dislikeCount,
      };
    });

    console.log(data);

    return (
      <main className='fixed-nav sticky-footer bg-dark' id='page-top'>
        <SideBar handleFormSubmit={this.handleSubmit} />
        <InfoWidgets
          thumbnail={this.state.thumbnail}
          banner={this.state.banner}
          published={new Date(this.state.published).toDateString()}
          views={this.state.views}
          subscribers={this.state.subscribers}
          videocount={this.state.videocount}
          video={this.state.selectedVideo}
        />
        <div className='content-wrapper'>
          <div className='container-fluid'>
            
              <div className='card mb-3'>
                <div className='card-header'>
                  <i className='fa fa-table'></i> Video List
                </div>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table
                      className='table table-bordered'
                      id='dataTable'
                      width='100%'
                      cellspacing='0'
                    >
                      <Table
                        columns={columns}
                        videos={data}
                        fetchData={this.fetchData}
                        loading={false}
                        pageCount={this.state.pageCount}
                      />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </main>
    );
  }
}

export default App;
