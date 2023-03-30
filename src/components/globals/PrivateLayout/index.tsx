import { Outlet } from 'react-router-dom';

import Layout from '@eduzz/houston-ui/Layout';

const { Topbar, Content } = Layout;

function PrivateLayout() {
  return (
    <Layout>
      <Topbar />

      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default PrivateLayout;
