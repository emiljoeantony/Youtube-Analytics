import React, { Component } from 'react';



class Form extends Component {
  state = {
    input: '',
    
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
      
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleFormSubmit(this.state.input);
  };
  render() {
    return (
      <div className='header'>
        <div className='main-menu-container'>
          <div className='logo'>
            Influencer's Ink
          </div>
          <div className='logo-break'>
            <div className='search-container'>
              <form onSubmit={this.handleSubmit} className='input-field'>
                <div className='input-label'>
                  <label htmlFor='video-search'></label>
                  <input
                    onChange={this.handleChange}
                    name='Search'
                    type='text'
                    placeholder='Enter YouTube Channel Id'
                  />
                  <button
                    className='search-button'
                    type='submit'
                    value='search'
                  >
                    s
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
