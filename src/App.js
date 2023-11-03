import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Cab from "./Cab/Cab";
import Train from "./Train/Train";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/cab" element={<Cab />}></Route>
          <Route path="/train" element={<Train />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
