import "./App.css";
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";

import {
  OtherTaskContainer,
} from "./Containers";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route exact path="/">
          <OtherTaskContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
