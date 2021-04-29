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
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

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
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <SignUp/>
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
