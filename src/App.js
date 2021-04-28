import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound.js/NotFound';
import Navbar from './components/Navbar/Navbar';
import AddOrders from './components/AddOrders.js/AddOrders';

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/addorders">
              <AddOrders/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
