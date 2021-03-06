import React from 'react';

function Graph() {
  return (
    
    <div class='card mb-3'>
      <div class='card-header'>
        <i class='fa fa-area-chart'></i> Subscribers Weekly
      </div>
      <div class='card-body'>
        <canvas id='myAreaChart' width='100%' height='30'></canvas>
      </div>
      <div class='card-footer small text-muted'>
        Updated yesterday at 11:59 PM
      </div>
    </div>
    
  );
}

export default Graph;
