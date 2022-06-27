import React from 'react';
import {useSelector} from 'react-redux';

import '../App.css';

export default function OutputTable() {
const state = useSelector(state => state);

  return (
    <>
        <div className="OutputTable">
            <p>Amount: {state.amount} </p>
            <p>Source of Loan: {state.loanType}</p>
            <p>Location: {state.location}</p>
            <p>Interest Rate: {state.interestRate}</p>
        </div>
    </>
  );
}
