import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';






class SideBar extends Component {
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
    <Navbar fixed='top' bg='dark' expand='lg' variant='dark' id='mainNav'>
      <Navbar.Brand href=''>Influencers Ink</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          
          <Nav.Link href=''>
            <i class='fas fa-tachometer-alt'></i>
            <span className='nav-link-text'>Dashboard</span>
          </Nav.Link>
          <Nav.Link href=''>
            <i className='fa fa-fw fa-area-chart'></i>
            <span className='nav-link-text'>Future Projections</span>
          </Nav.Link>
        </Nav>
        <Form onSubmit={this.handleSubmit} inline>
          <FormControl
            size='lg'
            onChange={this.handleChange}
            type='text'
            placeholder='Search'
            className='mr-sm-2'
          />
          <Button variant='outline-success' type='submit'>
            <i className='fa fa-search'></i>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}

export default SideBar;
