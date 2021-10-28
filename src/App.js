import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
