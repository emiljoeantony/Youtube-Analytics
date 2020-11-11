import React, { Component } from 'react';

import Info from './metrics/Info';

class Results extends Component {
  render() {
    return (
      <div >
        
            
              <Info
                title={this.props.title}
                description={this.props.description}
                thumbnail={this.props.thumbnail}
                banner={this.props.banner}

                
                views={this.props.views}
                likes={this.props.likes}
                dislikes={this.props.dislikes}
                published={this.props.published}
                subscribers={this.props.subscribers}
                videocount={this.props.videocount}
                country={this.props.country}
              />
            
          </div>
       
    );
  }
}

export default Results;
