import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  return (
    <div>
      <header>header</header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PrivateLayout;
