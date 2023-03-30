import { Navigate, Route, Routes as RoutesProvider } from 'react-router-dom';

import PrivateLayout from '@/components/globals/PrivateLayout';
import PermissionRoute from '@/components/shared/PermissionRoute';

import Dashboard from './private/Dashboard';

function Routes() {
  return (
    <RoutesProvider>
      <Route path='/login' element={<>login page</>} />

      <Route
        path='/'
        element={
          <PermissionRoute>
            <PrivateLayout />
          </PermissionRoute>
        }
      >
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='*' element={<>not found</>} />
      </Route>
    </RoutesProvider>
  );
}

export default Routes;
