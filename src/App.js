import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from "./components/Wrapper/Container";
import Spinner from './components/Loading/Spinner';
const Home = lazy(() => import('./pages/Home'));
const Breed = lazy(() => import('./pages/Breed'));
const PopularBreed = lazy(() => import('./pages/PopularBreed'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/breed/:id">
              <Breed />
            </Route>
            <Route path="/popular">
              <PopularBreed />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Container>
  );
}

export default App;
