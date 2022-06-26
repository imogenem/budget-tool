import React from 'react';

import './App.css';

import LoanInputsForm from "./components/LoanInputsForm";
import NavBar from "./components/NavBar";
import OutputTable from "./components/OutputTable";

function App() {
  return (
    <div className="App">
        <NavBar />
        <LoanInputsForm />
        <OutputTable />
    </div>
  );
}

export default App;
