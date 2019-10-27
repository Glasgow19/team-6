import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

//Define questionaire here:
import Questionaire from '../questions/disney';

//Define limit of question here: 
const QUESTION_LIMIT = 10; 

let questionNumber = 1; 
let metric = 0; 
let driven = false; 

const Quiz = () => {
    const [indexDriven, setIndexDriven] = useState(0);
    const [indexFiller, setIndexFiller] = useState(0);
    const [finished, setFinished] = useState(0);

    function answered(response) {
        questionNumber += 1;

        if(questionNumber == QUESTION_LIMIT) {
            setFinished(1);
        }

        if(!driven) {
            driven = true; 
            setIndexFiller(indexFiller + 1);
        } else {
            driven = false; 
            response == 1 ? metric += 0 : metric += 1; 
            setIndexDriven(indexDriven + 1);
        }
    }

    return (
        <div className='container'>
            { finished
                ? 
                    <div>
                        <h1> Finished! </h1>
                        <h2> You got: {Questionaire.data.results[metric].male} </h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control name='gender' as="select" required>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Age</Form.Label>
                                <Form.Control name='age'/>
                            </Form.Group>
                            <div className='buttonContainer'>
                                <Button variant="info" type="submit" size="lg">
                                    Submit
                                </Button>
                            </div>        
                        </Form>
                    </div>
                : 
                    <div>
                        <h1> {Questionaire.data.title} </h1>
                        <Card>
                            { console.log(JSON.stringify(Questionaire)) }
                            <Card.Header as="h5"> Question {questionNumber} </Card.Header>
                            <Card.Body>
                                <Card.Title className="questionTitle"> </Card.Title>
                                <Card.Text>
                                    {driven ? Questionaire.data.dataDrivenQuestions[indexDriven] : Questionaire.data.fillerQuestions[indexFiller]}
                                </Card.Text>
                                <div className='buttonContainer'>
                                    <Button className='responseButton' variant="success" onClick={() => answered(1)}>Yes</Button>
                                    <Button className='responseButton' variant="danger" onClick={() => answered(0)}>No</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
            }
        </div>
    );
}
  
export default Quiz;