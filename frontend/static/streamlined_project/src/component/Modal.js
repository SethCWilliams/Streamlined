import React, {Component} from 'react';
import '../containers/App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default class FolderModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            show: false,
            folder_title: '',
            icon: null,

        };
    }

    handleInput(e) {
        let obj = {};

        if (e.target.name !== 'icon') {
            obj[e.target.name] = e.target.value;
        } else {
            let icon = e.target.files[0];
            obj.icon = icon;

            let fileReader = new FileReader();
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

    handleSubmit() {
        console.log(this.state.folder_title);
        this.props.addFolder({folder_title: this.state.folder_title, icon: this.state.icon})
    }

    render() {
        return (
            <div className="text-center">
                <button onClick={this.handleShow} className="ui add-button animated primary button" tabIndex="0">
                    <div className="visible content pt-2">Make A List</div>
                    <div className="hidden content">
                        <i className="add-button plus icon"></i>
                    </div>
                </button>

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
                        <Button variant="primary" onClick={() => {
                            this.handleClose();
                            this.handleSubmit();
                        }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}