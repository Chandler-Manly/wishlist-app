// TA Session with Thomas
// display and rank the positions of a set of items 
// move items up/down list 
import "./App.css"
import List from "./components/List";
import Header from "./components/Header";
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home'
import ListBox from "./components/ListBox";


function App() {
  return (
    <div className="App">
      <Header />
      <ListBox />
      <List />
       
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </div>
  );
}

export default App;
