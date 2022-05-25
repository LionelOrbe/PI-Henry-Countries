import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}  /> 
      <Route path = '/' component={NavBar} />
      <Route path = '/home' component={Home} />
      <Route exact path='/home/:id' component={Detail}></Route>
      <Route exact path='/activities' component={CreateActivity}></Route>
      <h1>Henry Countries motherfuckers!</h1>
    </div>
  );
}

export default App;
