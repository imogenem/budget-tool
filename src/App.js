import './App.css';
import { CustomInputsForm } from './components/CustomInputsForm';

import LoanInputsForm from "./components/LoanInputsForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <LoanInputsForm />
        <CustomInputsForm />
    </div>
  );
}

export default App;
