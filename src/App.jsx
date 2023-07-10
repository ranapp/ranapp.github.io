import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import NoPage from "./pages/NoPage";
import Photography from "./pages/Photography";
import Footer from "./Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
    <div className="content">
    <BrowserRouter>
      <Routes>
        <Route path="/personal_site" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="photography" element={<Photography />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    <Footer/>
    </div>
  );
}

export default App;