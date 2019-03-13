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
        this.handleInput = this.handleInput.bind(this);

        this.state = {
            show: false,
            folder_title: '',
            icon: null,

        };
    }

    handleInput(e) {
        let obj = {};

        if (e.target.name !== 'image') {
            obj[e.target.name] = e.target.value;
        } else {
            let icon = e.target.files[0];
            obj.file = icon;

            let fileReader = new FileReader();
            fileReader.onload = () => this.setState({icon: fileReader.result});
            fileReader.readAsDataURL(icon);
        }
        this.setState(obj);
        console.log(this.state.icon);
        console.log(this.state.folder_title);
    };

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Add
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Title>New Folder</Modal.Title>
                    <Modal.Body htmlFor='folder_title'>Title:
                        <input
                            name='folder_title'
                            id='folder_title'
                            onChange={this.handleInput}
                            placeholder='genre, user, etc...'
                            type="text"/>
                    </Modal.Body>
                    <Modal.Body htmlFor='icon'>Folder Art:
                        <input
                            name='icon'
                            id='icon'
                            onChange={this.handleInput}
                            type="file"/>
                    </Modal.Body>
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