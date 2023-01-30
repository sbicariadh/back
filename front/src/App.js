
import './App.css';
import Navbarr from './component/Navbarr';
import Home from './component/Home';
import Cardlist from './component/Cardlist';
import Register from './auth/Register';
import  ContactUs  from './component/ContactUs';
import { Routes,Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

import Privetuser from './component/Privetuser';
import Addproduit from './component/Addproduit';


function App() {
  return (
    <div className="App">
     <Navbarr />
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/cards' element= {<Cardlist/>}/>
      <Route path='/register' element= {<Register/>}/>
      <Route path='/Contact' element= {<ContactUs/>}/>
      <Route path='/Addproduit' element= {<Addproduit/>}/>
      
      <Route path='/ap/Privetuser' element= {<Privetuser/>}/>
    
      <Route path='/privetcards' element= {<PrivateRoute/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
