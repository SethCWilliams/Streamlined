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
            folder: {programs: []}
        };
        this.handleShow = this.handleShow.bind(this);
        this.removeProgram = this.removeProgram.bind(this);
    }

    handleShow() {
        this.setState({show: true});
    }

    showPrograms(data){
        // data.preventDefault();
        this.setState({folder: data})
    }

    removeProgram(data){
        console.log("state of folder", this.state.folder);
        console.log("state of program", data);
        let folder_id = this.state.folder.id;
        let program_id = data.id;
        console.log(folder_id);
        console.log(program_id);
        fetch(`api/folder/${folder_id}/program/${program_id}/`, {
            method: 'DELETE',
        }).then((response) => {
            let folder = this.state.folder;
            let programs = this.state.folder.programs;
            programs = programs.filter((program) => {
                return program.id !== data.id;
            });

            folder.programs = programs;

            this.setState({folder: folder});

        })
        .catch(error => console.log('you wrong', error))
    }

    render() {
        let folders = this.props.newfolders.map((folder) => {
            console.log('newfolder', folder);
            return(
                <div className="d-inline-block" key={folder.id}>
                    <Card className="card-params" style={{width: '12rem'}}>
                         <Card.Img className='image-params' variant='top' src={folder.icon}/>
                         <Card.Body>
                             <Card.Title className="folder-title">{folder.folder_title}</Card.Title>
                         </Card.Body>
                        <div className="text-center">
                        <Button className="stacked-buttons" onClick={() => {this.props.edit(folder)}}>Edit Folder</Button>

                        <Button className="stacked-buttons" onClick={() => {this.showPrograms(folder)}}>Folder View</Button>
                        </div>
                     </Card>
                 </div>
             )
         });
        return(
            <div>
            <div className='row'>
                <div className="col container-outer folders">
                    <div className="container-inner">
                        {folders}
                    </div>
                </div>
            </div>
            <div className="row folder-content">
                <FolderContent foldercontent={this.state.folder} removeProgram={this.removeProgram}/>
            </div>
            </div>
        )
    }
}