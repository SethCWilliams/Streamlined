import React, {Component} from 'react';
import '../containers/App.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FolderContent from './FolderContent'
// import "user_folders/templates/user_folders/browse.html"


export default class NewFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folder: []
        }
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({show: true});
    }

    showPrograms(data){
        // data.preventDefault();
        this.setState({folder: data})
    }
    render() {
        let folders = this.props.newfolders.map((folder) => {
            console.log('newfolder', folder);
            return(
                <div className='d-inline-block' key={folder.id}>
                    <Card style={{width: '12rem'}}>
                         <Card.Img className='cover' variant='top' src={folder.icon}/>
                         <Card.Body>
                             <Card.Title>{folder.folder_title}</Card.Title>
                             <Card.Text className='card-text'>
                             </Card.Text>
                         </Card.Body>
                        <Button onClick={() => {this.props.edit(folder)}}>Edit Folder</Button>

                        <Button onClick={() => {this.showPrograms(folder)}}>Folder View</Button>
                     </Card>
                 </div>
             )
         });
        return(
            <div>
                <div className="forty-nine">
                    {folders}
                </div>
                <div className="forty-nine">
            <FolderContent foldercontent={this.state.folder}/>
                </div>
            </div>
        )
    }
}