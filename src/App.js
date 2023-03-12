import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adminrouter from './component/Adminrouter';
import Bookappoinment from './component/Bookappoinment';
import Home from './component/Home';
import Medisin from './component/Medisin';
import Layout from './component/Layout';
import Listappoinment from './component/Listappoinment';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Private from './component/Private';

function App() {
  return (
    <>
    
      
      <Routes>
        <Route  path='/' element={<Adminrouter><Layout><Home /></Layout></Adminrouter>}/>
        <Route  path='Medisin' element={<Adminrouter><Layout><Medisin /></Layout></Adminrouter>}/>
        <Route  path='/list' element={<Adminrouter><Layout><Listappoinment /></Layout></Adminrouter>}/>
        <Route  path='/book' element={<Private><Layout><Bookappoinment /></Layout></Private>}/>
        <Route  path='/login' element={<Login />}/>
      </Routes>
  
    </>
  );
}

export default App;
