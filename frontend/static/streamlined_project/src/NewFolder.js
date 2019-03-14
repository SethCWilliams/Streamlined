import React, {Component} from 'react';
import './App.css';
import Card from "react-bootstrap/Card";


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