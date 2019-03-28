import React, {Component} from 'react';
import '../containers/App.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
// import Button from "./component/NewFolder";
// import plus from "./plus.png";
// import FolderModal from "./containers/App";


export default class FolderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }




    render() {

        // console.log('foldercontent', this.props.foldercontent);
        let programs = this.props.foldercontent.programs;
        // console.log(programs);
        // if (programs !== undefined) {
        // still trying to figure out how to get programlist out and accessible

        // }
        return (
            <div className="bored">
                <h2 className="text-center ">{this.props.foldercontent.folder_title}</h2>
                <div className="row text-center m-3">
                {programs &&
                programs.map((program) => {
                    console.log(program);
                    return (
                        <div className="content-card col">
                            <Card className="carded" style={{width: '12rem'}}>
                                <Card.Img className='cover' variant='top' src={program.poster}/>
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title"><a href={`/program/${program.ref_id}/`}>{program.title}</a></Card.Title>
                                        <Button className="remove-button" onClick={() => {this.props.removeProgram(program)}} >Remove</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
                }
                </div>

            </div>
        )
    }
}