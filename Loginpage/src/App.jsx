import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-cyan-800 p-4 text-white">
      <div className="text-xl font-bold">My App</div>
      <div className="flex justify-center space-x-15 ">
        <Link to="/" className=  "hover:text-green-400 text-lg py-2 px-6 rounded-full border-2 border-transparent hover:border-white transition-all">Home</Link>
        <Link to="/about" className="hover:text-green-400 text-lg py-2 px-6 rounded-full border-2 border-transparent hover:border-white transition-all">About Us</Link>
        <Link to="/login" className="hover:text-green-400 text-lg py-2 px-6 rounded-full border-2 border-transparent hover:border-white transition-all">Login</Link>
        <Link to="/register" className="hover:text-green-400 text-lg py-2 px-6 rounded-full border-2 border-transparent hover:border-white transition-all">Register</Link>
      </div>
    </nav>
  );
}
function Home() {
  return <div className= "p-20 text-center font-bold text-xl h-screen bg-cyan-100">Welcome to My Home Page</div>;
}
function About() {
  return <div className="p-20 text-center font-bold text-xl h-screen bg-cyan-100">About Us Page</div>;
}
function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-100">
      <div className="bg-green-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <input className="block border p-2 w-full rounded-lg mb-8" type="text" placeholder="Username" />
        <input className="block border p-2 w-full rounded-lg mb-8" type="password" placeholder="Password" />
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-green-600">Login</button>
      </div>
    </div>
  );
}
function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-100">
      <div className="bg-green-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input className="block border p-2 w-full rounded-lg mb-3" type="text" placeholder="Username" />
        <input className="block border p-2 w-full rounded-lg mb-3" type="email" placeholder="Email" />
        <input className="block border p-2 w-full rounded-lg mb-3" type="password" placeholder="Password" />
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-green-600">Register</button>
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;