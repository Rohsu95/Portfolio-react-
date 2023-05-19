import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Project from "./page/Project/Project";
import Contact from "./page/Contact/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
