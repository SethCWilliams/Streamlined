import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import plus from './plus.png';


class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show: false,
    };
  }

  handleClose() {
    this.setState({ show: false});
  }

  handleShow() {
    this.setState({ show: true});
  }

  render() {
    return(
      <>
        <Button variant="primary" onClick={this.handleShow}>
            Add
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Title>New Folder</Modal.Title>
          <Modal.Body>Title:<input placeholder='genre, user, etc...' type="text"/></Modal.Body>
            <Modal.Body><input type="file"/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


class App extends Component {
    render() {
        return(
            <div className='App'>
                <Card style={{width: '12rem'}}>
                    <Card.Img className='cover' variant='top' src={plus}/>
                    <Card.Body>
                        <Card.Title>Add A List</Card.Title>
                        <Card.Text className='card-text'>
                        </Card.Text>
                        <Example/>
                    </Card.Body>
                </Card>;
            </div>
        );
    }
}

export default App;

