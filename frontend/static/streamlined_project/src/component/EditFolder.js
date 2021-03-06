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
        this.handleCancel = this.handleCancel.bind(this);
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

    handleCancel() {
        this.props.cancel();
    }

    handleDelete(e) {
        this.props.delete();
    }


    render() {
        return (
            <div className="height">
            <form className="height" id="uploadForm" onSubmit={e => {
                e.preventDefault();
            }}>
                <h2>Edit Your Folder</h2>
                <hr/>
                <img className="edit-image" src={this.state.icon} alt=""/>
                <input
                    name='icon'
                    id='icon'
                    onChange={this.handleInput}
                    type="file"/>
                <div id="theCaption">
                    <input id="enterFolderTitle" type="text" value={this.state.folder_title}
                           name='folder_title'
                           onChange={this.handleInput}/>
                    {/*onClick{...this.handleCancel} */}
                    <button onClick={this.handleCancel} className="btn btn-outline-info my-2 my-sm-0">Cancel</button>
                    <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0" onClick={this.handleUpdate}
                            value="submit">Save
                    </button>
                    <button id="submitButton" className="btn btn-outline-info my-2 my-sm-0"
                            onClick={this.handleDelete}>Delete
                    </button>
                </div>
            </form>
            </div>
        )
    }
}