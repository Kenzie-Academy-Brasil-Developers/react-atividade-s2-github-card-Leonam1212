import './App.css';

import Form from "./components/Form /index"
import Card from "./components/Cards /index"
import { useState } from "react"

function App() {

  const [valueInput, setValueInput] = useState([])



  console.log(valueInput)
  return (
    <div className="App">
        
            <Form setValueInput = {setValueInput} state = {valueInput}/>
        
            {/* aqui vem os cards */}
  
              <Card repositories = {valueInput}/>
            


    </div>
  );
}

export default App;
