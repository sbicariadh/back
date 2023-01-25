
import './App.css';
import Navbarr from './component/Navbarr';
import Home from './component/Home';
import Cardlist from './component/Cardlist';
import Register from './auth/Register';


import { Routes,Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <div className="App">
     <Navbarr />
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/cards' element= {<Cardlist/>}/>
      <Route path='/register' element= {<Register/>}/>
    
      <Route path='/privetcards' element= {<PrivateRoute/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
