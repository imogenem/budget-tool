import React,{useState} from 'react';

import '../App.css';

function Form(props) {

  return (
    <>
    <div className="form-container">
    <h3 id="form-title">Budget Inputs</h3>
            <form id="recipe-form">
                <p>
                <label>Debt amount</label>
                <input type="text" id="debtAmount" required />
            </p>
            <p>
                <label>Monthly Payment Amount</label>
                <input type="text" id="paymentAmount" required />
               </p>
                <button type="submit">Calculate</button> 
                <button type="reset">Reset</button>   
            </form>
    </div>
    </>
  );
}

export default Form;
