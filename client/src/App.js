
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Service from './components/Service';
import Espace from './components/Espace';
import Programme from './components/Programme';
import Contact from './components/Contact';
import Logi from './components/Logi';
import Navbarr from './components/Navbarr';
import Profil from './components/Profil';
import Register from './components/Register';
import { userCurrent } from './JS/userSlice/userSlice';
import PrivateRoute from './Routes/PrivateRouter';
import PrivateRouter from './Routes/PrivateRouter';
import './components/css/style.css';
import { getservice } from './JS/serviceSlice';
import Evenement from './components/Evenement';


import Activites from './components/Activites';
import Description from './components/Description';
import Inscricard from './components/Inscricard';
import { getinscription } from './JS/inscriptionSlice';





function App() {

  const [ping, setping] = useState('true')
  const isAuth=localStorage.getItem("token");
  const dispatch = useDispatch()
useEffect(() => {
  
    dispatch(userCurrent());
    dispatch(getservice());
    dispatch(getinscription());


  
}, [ping])
  return (
    <div className="App">
     <Navbarr/>



  <Routes>
  <Route  path="/" element={ <Home/ >} />
  <Route element={ <PrivateRoute/> }>
        </Route>{" "}
        <Route  path="/register" element={ <Register ping={ping} setping={setping}/> } />
        <Route path="/login" element={ <Logi ping={ping} setping={setping}/> } />
        <Route path="/event" element={ <Evenement/> } />
    
        <Route path="/Service" element={ <Service/> } />
        <Route path="/Programme" element={ <Programme/> } />
        <Route path="/Espace" element={ <Espace/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/activites" element={ <Activites ping={ping} setping={setping}/> } />
        <Route path="/profil" element={<Profil ping={ping} setping={setping}/> } />
        <Route path="/inscricard" element={<Inscricard/> } />

        <Route path="/Description/:id" element={<Description Service={Service} ping={ping} setping={setping}/>} />




  </Routes>
  

<div className='footer'>
 <Footer/> 

</div>
    </div>
  );
}

export default App;
