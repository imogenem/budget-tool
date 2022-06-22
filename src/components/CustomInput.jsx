import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export default class CustomInputsForm extends React.Component {
    render() {
        return (<div>
            <Row>
            <Form.Control type="text" placeholder="Enter name of expense" />
            <Form.Control type="number" placeholder="Enter amount" />
            </Row>
        </div>);
    }
}