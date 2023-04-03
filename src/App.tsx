import 'antd/dist/reset.css';

import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'antd';

import { ThemeProvider } from '@emotion/react';

import theme from '@/assets/theme';
import AppRoutes from '@/pages/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
