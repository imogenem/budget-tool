import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap'

import '../App.css';

const LOAN_TYPE = [
  { id: 0, name: 'Government' },
  { id: 1, name: 'Private' },
];

const PROVINCE = [
  { id: 0, name: 'BC' }
];

export default function LoanInputsForm(props) {
  const [studentDebtSelected, setStudentDebtSelected] = useState(false);

    const itemTypeDropdowns = LOAN_TYPE.map((type) => {
      return <option key={type.id}>{type.name}</option>
    });
  
    const locationDropdowns = PROVINCE.map((location) => {
      return <option key={location.id}>{location.name}</option>
    });
  
  return (
    <>
    <h2>Enter student debt information</h2>
      <Form>
        <Form.Group>
          <Form.Label>Debt Amount</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Row>
          <Form.Group>
            <Form.Label>Source of loan</Form.Label>
            <Form.Select>
              <option>Select a type...</option>
              {itemTypeDropdowns}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Select>
              {locationDropdowns}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
        <Form.Group>
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
          <Form.Group>
          <Form.Label>Would you like to include this in your overall calculation?</Form.Label>
            <Form.Switch
              checked={studentDebtSelected}
              onChange={() => setStudentDebtSelected(!studentDebtSelected)} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">Submit</Button>
        <Button variant="danger" type="reset">Reset</Button>
      </Form>
    </>
  );
}
