import logo from './logo.svg';
import './App.css';
import Tela_Inicial from './Tela_Inicial';
import Tela_Matches from './Tela_Matches';
import {useState} from 'react';




function App() {

  const [page, setPage] = useState(true)

  return (
    <div>
      <button onClick={()=> setPage(!page)}> 

    </button>

  {page ? <Tela_Inicial /> : <Tela_Matches />}
    </div>
    
  );
}

export default App;
