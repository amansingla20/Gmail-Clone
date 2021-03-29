import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import EmailList from './EmailList';
import Mail from './Mail';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className='App-body'>
        <Sidebar/>
        <Switch>
          <Route path='/mail'>
            <Mail/>
          </Route>
          <Route path='/'>
            <EmailList />
          </Route>
        </Switch>
        </div>
        </div>
    </Router>
  );
}

export default App;
