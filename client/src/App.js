import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage/loginPage';
import SignUpPage from './pages/SignUpPage/signUpPage';

function App() {
  return (
    <Router>
          <div className="app ">
            <Routes>
              <Route path="/login" element={<LoginPage/>}/>     
              <Route path="/signup" element={<SignUpPage/>}/> 
            </Routes>
          </div>
        </Router>
  );
}

export default App;
