import React, { Component } from 'react';
import Tags from './metrics/Tags';
import Info from './metrics/Info';

class Results extends Component {
  render() {
    return (
      <div className='results-list'>
        <div id='tags'>
          <div class='px-2'>
            
            <li class='flex -mx-2'>
              
              <Info
                title={this.props.title}
                description={this.props.description}
                
                views={this.props.views}
                likes={this.props.likes}
                dislikes={this.props.dislikes}
                published={this.props.published}
                subscribers={this.props.subscribers}
                videocount={this.props.videocount}
                thumbnail={this.props.thumbnail}
                country={this.props.country}
                banner={this.props.banner}
              />
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
