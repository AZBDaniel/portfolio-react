import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      {/* Header*/}
      <header>
        <h1>
          Bryan Daniel
        </h1>
<Nav />
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
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
