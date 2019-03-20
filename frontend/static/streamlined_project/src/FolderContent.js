import React, {Component} from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from "./NewFolder";


export default class FolderContent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }



    render() {

        console.log('foldercontent', this.props.foldercontent);
        let programs = this.props.foldercontent.programs;
        console.log(programs);
        if (programs !== undefined) {
            // still trying to figure out how to get programlist out and accessible
            let programlist = programs.map((program) => {
                console.log(program);
                return (
                    <div className='App'>
                        <Card style={{width: '12rem'}}>
                            <Card.Img className='cover' variant='top' src={program.poster}/>
                            <Card.Body>
                                <Card.Title>{program.title}</Card.Title>
                                <Card.Text className='card-text'>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            });
        }
        return(
            <div>
                <h1>test</h1>
                {this.props.foldercontent.folder_title}
                {/*{programlist}*/}
            </div>
        )
    }
}