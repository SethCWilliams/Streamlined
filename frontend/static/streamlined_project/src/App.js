import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card'
import plus from './plus.png';
import FolderModal from './Modal'
import action from './action.jpg'
import NewFolder from "./NewFolder";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            folders: [{folder_title: 'action', icon: {action} }, {folder_title: 'drama', icon:{action}}],
        };
        this.addFolder = this.addFolder.bind(this);
    }
//I need to start getting addfolder setup so that it can update the state of folders
    //when someone adds a new folder. look at 83 react image board for help.
    addFolder(e){
        e.preventDefault();
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

