import { BrowserRouter } from 'react-router-dom';

import ThemeProvider, { createTheme } from '@eduzz/houston-ui/ThemeProvider';

import AppRoutes from './pages/routes';

const theme = createTheme('eduzz');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
