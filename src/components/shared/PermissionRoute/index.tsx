import { memo } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const PermissionRoute = ({ children }: Props) => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate replace to='/login' />;

  return <>{children}</>;
};

export default memo(PermissionRoute);
