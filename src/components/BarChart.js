import React from 'react';

function BarChart() {
  return (
    <div className='row'>
      <div className='col-lg-8'>
        <div className='card mb-3'>
          <div className='card-header'>
            <i className='fa fa-bar-chart'></i> Bar Chart Subscribers monthly
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-sm-8 my-auto'>
                <canvas id='myBarChart' width='100' height='50'></canvas>
              </div>
              <div className="col-sm-4 text-center my-auto">
                  <div className="h4 mb-0 text-primary">35600</div>
                  
              </div>
            </div>
          </div>
          <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
