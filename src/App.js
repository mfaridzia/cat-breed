import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from "./components/Wrapper/Container";
import Home from './pages/Home';
import DetailBreed from './pages/DetailBreed';
import PopularBreed from './pages/PopularBreed';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/breed/:id">
            <DetailBreed />
          </Route>
          <Route path="/popular">
            <PopularBreed />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
