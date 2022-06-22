import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import CustomInput from './CustomInput';


export class CustomInputsForm extends React.Component {
    render() {
        return (<div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Other expenses</Form.Label>
                <Button size="sm">Add</Button>
                <CustomInput />
            </Form.Group>
            </Form>
        </div>);
    }
}