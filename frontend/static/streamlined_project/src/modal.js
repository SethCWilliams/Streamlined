import React, {Component} from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import action from './action.jpg'




export default class FolderModal extends Component {
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
      <div>
        <Button variant="primary" onClick={this.handleShow}>
            Add
        </Button>

        <Modal show={this.state.show} onClick={this.props.addFolder} onHide={this.handleClose}>
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
      </div>
    );
  }
}