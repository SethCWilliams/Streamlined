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
            <div>
                {this.props.foldercontent.folder_title}
                {programs &&
                programs.map((program) => {
                    console.log(program);
                    return (
                        <div className="content-card">
                            <Card onHover style={{width: '12rem'}}>
                                <Card.Img className='cover' variant='top' src={program.poster}/>
                                <Card.Body className="content-card">
                                    <Card.Title><a href={`/program/${program.ref_id}/`}>{program.title}</a></Card.Title>
                                    <Card.Text className='card-text'>
                                        <Button>Remove {program.title}</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
                }

            </div>
        )
    }
}