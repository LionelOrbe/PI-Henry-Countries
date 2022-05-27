import { Route, Switch} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateActivity from './components/CreateActivity/CreateActivity';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}  /> 
        <Route>
          <Route exact path ='/home' component={NavBar} />
          <Route exact path = '/home' component={Home} />
          <Route exact path='/home/:id' component={Detail}/>
          <Route exact path='/activities' component={CreateActivity}/>
        </Route>
        <Route path='*' component={NotFound} />
     
        
      </Switch>
     
    </div>
  );
}

export default App;
