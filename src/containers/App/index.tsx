import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'utils/constants';
import { MainWrapper } from './styles';

const HomePage = lazy(() => import('containers/HomePage'));

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={routes.home} component={HomePage} />
      </Switch>
    </Suspense>
  );
};

export default App;
