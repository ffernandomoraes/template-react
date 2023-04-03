import { Route, Routes as RoutesProvider } from 'react-router-dom';

import PrivateLayout from '@/components/globals/PrivateLayout';
import PermissionRoute from '@/components/shared/PermissionRoute';

import Dashboard from './private/Dashboard';
import Welcome from './public/Welcome';

function Routes() {
  return (
    <RoutesProvider>
      <Route path='/' element={<Welcome />} />

      <Route
        path='/'
        element={
          <PermissionRoute>
            <PrivateLayout />
          </PermissionRoute>
        }
      >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<>not found</>} />
      </Route>
    </RoutesProvider>
  );
}

export default Routes;
