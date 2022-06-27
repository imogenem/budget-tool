import './App.css';

import LoanInputsForm from "./components/LoanInputsForm";
import NavBar from "./components/NavBar";
import CarInputsForm from "./components/CarInputsForm"

function App() {
  return (
    <div className="App">
        <NavBar />
        <LoanInputsForm />
        <CarInputsForm />
    </div>
  );
}

export default App;
