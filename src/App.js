import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>

        </Route>
        <Route exact path='/home'>
          <Home></Home>

        </Route>
        <Route path='/about'>
          <About></About>

        </Route>
        <Route path='/projects'>
          <Projects></Projects>

        </Route>
        <Route path='/blogs'>
          <Blogs></Blogs>

        </Route>
        <Route path='/contact'>
          <Contact></Contact>

        </Route>
      </Switch>
    </Router>

  );
}

export default App;
