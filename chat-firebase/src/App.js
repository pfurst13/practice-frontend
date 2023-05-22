import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";


function App() {
  return (
    <div>
      <Register />
      {/* <Login />
      <Home /> */}
    </div>
  );
}

export default App;
