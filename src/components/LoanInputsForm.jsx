import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap'

import { display_loan_inputs } from '../redux/actions.js'

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
  const [amount, setAmount] = useState('');
  const [loanType, setLoanType] = useState('');
  const [location, setLocation] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const dispatch = useDispatch()

    const itemTypeDropdowns = LOAN_TYPE.map((type) => {
      return <option key={type.id}>{type.name}</option>
    });
  
    const locationDropdowns = PROVINCE.map((location) => {
      return <option key={location.id}>{location.name}</option>
    });

    function handleAmount(event){
      setAmount(event.target.value)
    }

    function handleLoanType(event){
      setLoanType(event.target.value)
    }

    function handleLocation(event){
      setLocation(event.target.value)
    }

    function handleInterestRate(event){
      setInterestRate(event.target.value)
    }

    function handleSubmit(event){
      event.preventDefault();
 
      let inputs = {
        amount,
        loanType,
        location,
        interestRate
      }

      dispatch(display_loan_inputs(inputs))
    }
  
  return (
    <>
    <h2>Enter student debt information</h2>
      <Form>
        <Form.Group>
          <Form.Label>Debt Amount</Form.Label>
          <Form.Control type="text" onChange={handleAmount}></Form.Control>
        </Form.Group>
        <Row>
          <Form.Group>
            <Form.Label>Source of loan</Form.Label>
            <Form.Select onChange={handleLoanType}>
              <option>Select a type...</option>
              {itemTypeDropdowns}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Select onChange={handleLocation}>
              {locationDropdowns}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
        <Form.Group>
          <Form.Label >Interest Rate</Form.Label>
          <Form.Control type="text" onChange={handleInterestRate}></Form.Control>
        </Form.Group>
          <Form.Group>
          <Form.Label>Would you like to include this in your overall calculation?</Form.Label>
            <Form.Switch
              checked={studentDebtSelected}
              onChange={() => setStudentDebtSelected(!studentDebtSelected)} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" onClick={handleSubmit} >Submit</Button>
        <Button variant="danger" type="reset">Reset</Button>
      </Form>
    </>
  );
}
