import React, {Component} from 'react';
import './App.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FolderContent from './FolderContent'
// import "user_folders/templates/user_folders/browse.html"


export default class NewFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folder: [{programs: 'test'}]
        }
    }
    showPrograms(data){
        // data.preventDefault();
        this.setState({folder: data})
    }
    render() {
        console.log('new folders', this.props.newfolders);
        let folders = this.props.newfolders.map((folder) => {
            console.log(folder.programs);
            return(
                <div className='App'>
                    <Card style={{width: '12rem'}}>
                         <Card.Img className='cover' variant='top' src={folder.icon}/>
                         <Card.Body>
                             <Card.Title>{folder.folder_title}</Card.Title>
                             <Card.Text className='card-text'>
                             </Card.Text>
                         </Card.Body>
                        <Button onClick={() => {this.showPrograms(folder)}}>Edit Folder</Button>
                        <Button>Folder View</Button>
                     </Card>
                 </div>
             )
         });
        return(
            <div>
            {folders}
            <FolderContent foldercontent={this.state.folder}/>
            </div>
        )
    }
}