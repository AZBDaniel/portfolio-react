import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import React, {useState} from 'react';

function App() {

  const [pageRender, setPageRender] = useState("Home")

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
      {pageRender === "Home"?<Home />:""}
      {pageRender === "Work"?<Work />:""}
      {pageRender === "About"?<About />:""}
      {pageRender === "Contact Me"?<Contact />:""}
      <img src="src/assets/images/background.png" alt="PCB circuit board with cooper surface traces and lighter green internal"></img>
    </div>
  );
}

export default App;
