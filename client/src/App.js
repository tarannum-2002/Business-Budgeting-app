

 import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages'
 import Login from './pages/Login'
 import Signup from './pages/Signup'
 import EnterDetails from './pages/EnterDetails'
 import RegisterBusiness from './pages/RegisterBusiness'


//  import Dashboard from './pages/Dashboard'
 
 const App = () => {
     return (
         <div>
             <BrowserRouter>
             <Navbar/>
                <Routes>
                 <Route path="/Login" element={<Login/>} />
                 <Route path="/Signup" element={<Signup/>} />
                 <Route path="/EnterDetails" element={<EnterDetails/>} />
                 <Route path="/RegisterBusiness" element={<RegisterBusiness/>} />


                 </Routes>
                 {/* <Route path="/dashboard" exact component={Dashboard} /> */}
             </BrowserRouter>
         </div>
     )
 }
 
 export default App
 