import React from 'react';
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Nav from '../Components/Common/Nav/Nav';
import Footer from '../Components/Common/Footer/Footer';
import { Home , About, Feature , Career, FAQ } from '../Pages/index'






function App() {

    return (

      <React.Fragment>

       <Nav />

       <Routes>
           <Route path="/boost_react" element={<Home />} />
           <Route path="/about_us" element={<About />} />
           <Route path="/careers" element={<Career />} />
           <Route path="/features" element={<Feature />} />
           <Route path="/faq" element={<FAQ />} />

       </Routes>

       <Footer />
       

       </React.Fragment>
    );
  }
  
  export default App;
  