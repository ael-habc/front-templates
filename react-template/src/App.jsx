import { Routes, Route, Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import styled from "styled-components"
import "./styles/index.scss"
import Nav from "./components/navBar";


const HomePage = () => {
  return <div></div>
};

const AboutPage = () => {
  return <div>jfkdvjkfd</div>
};

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
  );
};


function App() {
  return (
    <div className="App">
       <Nav fileName="hello"/>
      <RouterView />
    </div>
  );
}

export default App;
