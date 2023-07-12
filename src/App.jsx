
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";


const App = () => {
    return (
        <div className='dark'>

            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>



            </Router>

        </div>
    );
}

export default App;