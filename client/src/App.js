
import Home from'./components/Home.js';
import SharedComponent from'./components/SharedComponent.js';
import Error404 from './components/Error404.js';
import Error403 from './components/Error403.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import ScrollToTop from './components/ScrollToTop.js';

import ActiveOrders from './components/ActiveOrders.js';
import CompletedOrders from './components/CompletedOrders.js';

import Revenue from './components/Revenue.js';
import Profile from './components/Profile.js';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
    <Router>

      <ScrollToTop/>
    
<Routes>
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
  <Route path="/" element={<SharedComponent/>} >
    <Route index element={<Home/>} />
    
    <Route path="/activeorders" element={<ActiveOrders/>} />
    <Route path="/completedorders" element={<CompletedOrders/>} />
    <Route path="/revenue" element={<Revenue/>} />
   
    <Route path="/profile" element={<Profile/>} />
    <Route path="*" element={<Error404/>} />
   
  </Route>
  
</Routes>


    </Router>


      
    
    </>
    
  );
}

export default App;
