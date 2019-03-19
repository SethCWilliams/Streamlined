import React, {Component} from 'react';
import './App.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
// import "user_folders/templates/user_folders/browse.html"


export default class NewFolder extends Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render() {
        console.log(this.props.newfolders);
        let folders = this.props.newfolders.map((folder) => {
            return(
                <div className='App'>
                    <Card style={{width: '12rem'}}>
                         <Card.Img className='cover' variant='top' src={folder.icon}/>
                         <Card.Body>
                             <Card.Title>{folder.folder_title}</Card.Title>
                             <Card.Text className='card-text'>
                             </Card.Text>
                         </Card.Body>
                        <Button href="/program/folder">Folder View</Button>
                     </Card>
                 </div>
             )
         });
        return(
            <div>
            {folders}
            </div>
        )
    }
}