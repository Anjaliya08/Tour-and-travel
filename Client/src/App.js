import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Packages from './pages/Package';
import Services from './pages/Service';


import Yatra from './pages/Yatra';
import AirBooking from './pages/Air';
import CarBus from './pages/Car';
import Hotel from './pages/Hotel';
import BusRentalPage from './pages/Bus';
import TrainBooking from './pages/Train';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/package" element={<Packages />} />
        <Route path="/service" element={<Services/>} />
        
       
        <Route path="/yatra" element={<Yatra />} />
        <Route path="/air" element={<AirBooking />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/carbus" element={<CarBus />} />
        <Route path="/bus" element={<BusRentalPage />} />
        <Route path='/train' element={<TrainBooking/>}/>
        <Route path='/contact' element={<Contact/>}/>

        

      </Routes>
    </Router>
  );
}

export default App;
