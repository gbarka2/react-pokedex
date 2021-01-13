import './App.css';
import {Route, Switch} from 'react-router-dom'
import Pokedex from './pages/pokedex'
import Nav from './components/nav'
import MyTeam from './pages/myTeam'


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Pokedex />
        </Route>
        <Route path="/myTeam">
          <MyTeam />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
