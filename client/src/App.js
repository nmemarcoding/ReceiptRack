import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage/loginPage';
import SignUpPage from './pages/SignUpPage/signUpPage';
import HomePage from './pages/HomePage/homePage';
import AddReceiptPage from './pages/AddReceiptPage/AddReceiptPage';
import SearchReceiptPage from './pages/SearchReceiptPage/SearchReceiptPage';

function App() {
  return (
    <Router>
          <div className="app ">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>     
              <Route path="/signup" element={<SignUpPage/>}/> 
              <Route path="/add-receipt" element={<AddReceiptPage/>}/>
              <Route path="/search-receipt" element={<SearchReceiptPage/>}/>
            </Routes>
          </div>
        </Router>
  );
}

export default App;
