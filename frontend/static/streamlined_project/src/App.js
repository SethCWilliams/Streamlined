import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card'
import plus from './plus.png';
import FolderModal from './Modal'
import NewFolder from "./NewFolder";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            folders: [],
        };
        this.addFolder = this.addFolder.bind(this);
    }

    addFolder(dataObject){
        console.log(dataObject);
        let folder_title = dataObject.folder_title;
        console.log(folder_title);
        let icon = dataObject.icon;
        console.log('icon', icon);

        let formData = new FormData();
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
            if(response.status === 200){
                return response.json()
            }else {
                throw new Error("something's wrong.")
            }
        }).then(json => this.setState({folders: json}))
            .catch(error => console.log(error));
    }

    render() {
        return(
            <div className='App'>
                <Card style={{width: '12rem'}}>
                    <Card.Img className='cover' variant='top' src={plus}/>
                    <Card.Body>
                        <Card.Title>Add A List</Card.Title>
                        <Card.Text className='card-text'>
                        </Card.Text>
                        <FolderModal addFolder={this.addFolder}/>
                    </Card.Body>
                </Card>
                <NewFolder newfolders={this.state.folders}/>
            </div>
        );
    }
}

export default App;

