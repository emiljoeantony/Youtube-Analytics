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
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <form
            onSubmit={this.handleSubmit}
            className='form-inline my-2 my-lg-0 mr-lg-2'
          >
            <div className='input-group'>
              <input
                onChange={this.handleChange}
                className='form-control'
                type='text'
                placeholder='Search for...'
              />
              <span className='input-group-append'>
                <button className='btn btn-primary' type='button'>
                  <i className='fa fa-search'></i>
                </button>
              </span>
            </div>
          </form>
        </li>
      </ul>
    );
  }
}

export default Form;
