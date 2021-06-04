import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Landing = lazy(() => import('./pages/landing'));
const Conference = lazy(() => import('./pages/conference'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.CONFERENCE} component={Conference} />
          <Route path={ROUTES.LANDING} component={Landing} />
        </Switch>
      </Suspense>
    </Router>
  );
}
