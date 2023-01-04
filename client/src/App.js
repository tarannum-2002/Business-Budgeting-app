

 import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import Login from './pages/Login'
 import Signup from './pages/Signup'
//  import Dashboard from './pages/Dashboard'
 
 const App = () => {
     return (
         <div>
             <BrowserRouter>
                <Routes>
                 <Route path="/Login" element={<Login/>} />
                 <Route path="/Signup" element={<Signup/>} />
                 </Routes>
                 {/* <Route path="/dashboard" exact component={Dashboard} /> */}
             </BrowserRouter>
         </div>
     )
 }
 
 export default App
 