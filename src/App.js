import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';
import Nav from './components/Nav';
import React, {useState} from 'react';

function App() {

  const [pageRender, setPageRender] = useState("Work")

  return (
    <div>
      {/* Header*/}
      <header>
        <h1>
          Bryan Daniel
        </h1>
<Nav pageRender = {setPageRender} />
      </header>
      {/*End of Header*/}
      {/*Banner/Avatar*/}
      <div className="banner">
        <img src="/img/avatar.jpg" />
        <div>
          <p>
            Portfolio
          </p>
        </div>
      </div>
      {/* End of Banner*/}
      {pageRender === "About Me"?<AboutMe />:""}
      {pageRender === "Work"?<Work />:""}
      {pageRender === "Contact Me"?<Contact />:""}
    </div>
  );
}

export default App;
