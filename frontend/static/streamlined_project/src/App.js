import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card'
import plus from './plus.png';
import Modal from './modal'

class App extends Component {
    render() {
        return(
            <div className='App'>
                <Card style={{width: '12rem'}}>
                    <Card.Img className='cover' variant='top' src={plus}/>
                    <Card.Body>
                        <Card.Title>Add A List</Card.Title>
                        <Card.Text className='card-text'>
                        </Card.Text>
                        <Modal/>
                    </Card.Body>
                </Card>;
            </div>
        );
    }
}

export default App;

