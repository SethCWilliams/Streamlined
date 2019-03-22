import React, {Component} from 'react';
import '../containers/App.css';
// import Card from "./NewFolder";
// import plus from "../plus.png";
// import FolderModal from "../containers/App";


export default class EditFolder extends Component {
    constructor(props) {
        super(props);
        let folder = props.folder;

        this.state = {
            folder_title: folder.folder_title,
            icon: folder.icon,
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInput(event) {
        // let obj = {};
        //
        // obj[event.target.name] = event.target.value;

        this.setState({[event.target.name]: event.target.value});
        // console.log('object', obj)
        console.log('icon', this.state.icon)
    };

    handleUpdate(e) {
        e.preventDefault();
        // , icon: this.state.icon
        // this.props.update({folder_title: this.state.folder_title, icon: this.state.icon});
        this.props.update({folder_title: this.state.folder_title});
        // console.log('update', this.state.folder_title);
        // console.log('picture update', this.state.icon);
    }

    handleDelete(e) {
        this.props.delete();
    }


    render() {
        return (

            <form id="uploadForm" onSubmit={e => {
                e.preventDefault();
            }}>
                <h1 id="editPostText">EDIT POST</h1>
                <hr/>
                <img src={this.state.icon} alt=""/>
                <input
                    name='icon'
                    id='icon'
                    onChange={this.handleInput}
                    type="file"/>
                <div id="theCaption">
                    <input id="enterFolderTitle" type="text" value={this.state.folder_title}
                           name='folder_title'
                           onChange={this.handleInput}/>
                    <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0" onClick={this.handleUpdate}
                            value="submit">Save
                    </button>
                    <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0"
                            onClick={this.handleDelete}>Delete
                    </button>
                </div>
            </form>
        )
    }
}