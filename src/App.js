import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from "./components/Home";
import UserDetail from "./UserDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={UserList} />
          
          <Route path="/:id" render={(props) => <UserDetail {...props} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
