import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from "./components/Wrapper/Container";
import Spinner from './components/Loading/Spinner';
const Home = lazy(() => import('./pages/Home'));
const DetailBreed = lazy(() => import('./pages/DetailBreed'));
const PopularBreed = lazy(() => import('./pages/PopularBreed'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
   <Suspense fallback={<Spinner />}>
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
   </Suspense>
  );
}

export default App;
