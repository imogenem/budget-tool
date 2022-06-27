import React from 'react';

import './App.css';
import { CustomInputsForm } from './components/CustomInputsForm';

import LoanInputsForm from "./components/LoanInputsForm";
import NavBar from "./components/NavBar";
import OutputTable from "./components/OutputTable";
import CarInputsForm from "./components/CarInputsForm"

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <div className="grid-container">
        <div className="grid-item">
        <h1>Inputs</h1>
        <LoanInputsForm />
        <CarInputsForm />
        <CustomInputsForm />
        </div>
        <div className="grid-item">
        <h1>Outputs</h1>
        <OutputTable /> 
        </div>

      </div>
    </div>
  );
}

export default App;

