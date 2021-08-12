import Home from './pages/Home';
import Contact from './pages/Contact';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App() { 
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/contact" component={Contact}></Route> 
    </Router> 
  );
}

export default App;