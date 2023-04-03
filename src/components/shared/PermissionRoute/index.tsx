import { memo, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const PermissionRoute = ({ children }: PropsWithChildren) => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate replace to='/login' />;

  return <>{children}</>;
};

export default memo(PermissionRoute);
