import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap'

import '../App.css';

const PROVINCE = [
  { id: 0, name: 'BC' }
];

const FREQUENCY = [
  { id: 0, name: 'weekly'},
  { id: 1, name: 'biweekly'},
  { id: 2, name: 'monthly'},
];

export default function CarInputsForm(props) {
  const [studentDebtSelected, setStudentDebtSelected] = useState(false);

    const locationDropdowns = PROVINCE.map((location) => {
      return <option key={location.id}>{location.name}</option>
    });

    const frequencyDropdowns = FREQUENCY.map((location) => {
      return <option key={location.id}>{location.name}</option>
    });

  return (
    <>
      <h2>Enter car loan information</h2>
      <Form>
        <Form.Group>
          <Form.Label>Price of Vehicle</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Down Payment Amount</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Duration of Loan</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Row>
          <Form.Group>
            <Form.Label>Frequency of Payment</Form.Label>
            <Form.Select>
              {frequencyDropdowns}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Select>
              {locationDropdowns}
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group>
          <Form.Label>Sales Tax %</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>

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