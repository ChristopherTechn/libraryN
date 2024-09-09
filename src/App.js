import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetBooks from './components/Getallbooks';
import Addbook from './components/Addbooks';
import Member from './components/Members';
import GetLibraries from './components/Libraries';
import Register from './components/Register-user';
import Login from './components/Login-memebers';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigation Links */}
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Get All Books</Link></li>
                        <li><Link to="/add-book">Add a Book</Link></li>
                        <li><Link to="/members">Members</Link></li>
                        <li><Link to="/libraries">Libraries</Link></li>
                        <li><Link to="/Registration">Registration</Link></li>
  <li><Link to="/Login">Registration</Link></li>
                    </ul>
                </nav>

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<GetBooks />} />
                    <Route path="/add-book" element={<Addbook />} />
                    <Route path="/members" element={<Member />} />
                    <Route path="/libraries" element={<GetLibraries />} />
                    <Route path="/Registration" element={<Register />} />
                    <Route path="/Login" element={<Login />} />

                </Routes>
            </div>
        </Router>
    );
}

// Home component (optional, for the homepage)
function Home() {
    return (
        <div>
            <h2>Welcome to the Library System</h2>
            <p>Select an option from the navigation menu.</p>
        </div>
    );
}

export default App;
