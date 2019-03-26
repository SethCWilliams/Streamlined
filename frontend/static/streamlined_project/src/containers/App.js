import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card'
import plus from '../plus.png';
import FolderModal from '../component/Modal'
import NewFolder from "../component/NewFolder";
import EditFolder from "../component/EditFolder";

// import * as edit from 'react-edit';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            folders: [],
            isEditing: false,
        };
        this.addFolder = this.addFolder.bind(this);
        this.doEdit = this.doEdit.bind(this);
        this.updateFolder = this.updateFolder.bind(this);
        this.deleteFolder = this.deleteFolder.bind(this);
    }

    doEdit(folder) {
        this.setState({isEditing: folder});
    }

    updateFolder(dataObj) {

        let myObj = Object.assign({}, this.state.isEditing, dataObj);
        let index = this.state.folders.indexOf(this.state.isEditing);

        let folders = [...this.state.folders];
        folders[index] = myObj;

        // this.setState({folders, isEditing: false});


        fetch(`/api/folder/${this.state.isEditing.id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({dataObj})
        }).then(response => response.json())
            .then(json => {
                this.setState({folders, isEditing: false});
                console.log('Put Success', JSON.stringify(json));
                console.log(json)
            })
            .catch(error => console.log('Error', error));
        // this.setState({isEditing: false})
    }

    deleteFolder() {
        // let myObj = Object.assign({}, this.state.isEditing, dataObj);
        // let index = this.state.folders.indexOf(this.state.isEditing);
        //
        // let folders = [...this.state.folders];
        // folders[index] = myObj;
        fetch(`/api/folder/${this.state.isEditing.id}/`, {
            method: 'DELETE',
        }).then(response => response.json())
            .then(json => {
                console.log('Put Success', JSON.stringify(json));
                console.log(json)
            })
            .catch(error => console.log('Error', error));
        this.setState({isEditing: false})
    }

    addFolder(dataObject) {
        let folder_title = dataObject.folder_title;
        let icon = dataObject.icon;

        let formData = new FormData();
        // this.setState({folders: dataObject});
        formData.append('folder_title', folder_title);
        formData.append('icon', icon);
        fetch(`/api/folder/`, {
            method: 'POST', body: formData
        }).then(response => response.json())
            .then(json => console.log('success!', JSON.stringify(json)))
            .catch(error => console.log('ERROR!', error))
    }

    componentDidMount() {
        fetch(`/api/folder/`, {
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error("something's wrong.")
            }
        }).then(json => this.setState({folders: json}))
            .catch(error => console.log(error));
    }

    render() {
        console.log('edit', this.state.isEditing);
        return (
            <div>
                <Card style={{width: '12rem'}}>
                    <Card.Img className='background-color' variant='top' src={plus}/>
                    <Card.Body>
                        <Card.Title>Add A List</Card.Title>
                        <Card.Text className='card-text'>
                        </Card.Text>
                        <FolderModal addFolder={this.addFolder}/>
                    </Card.Body>
                </Card>
                {this.state.isEditing ? (
                    <EditFolder folder={this.state.isEditing} update={this.updateFolder}
                                delete={this.deleteFolder}/>) : (

                    <NewFolder newfolders={this.state.folders} edit={this.doEdit}/>
                )}

            </div>
        );
    }
}

export default App;

