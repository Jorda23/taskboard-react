import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ManagerRoutes } from './routes';
import { store } from './store';
import { ThemeProvider } from './theme/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <ManagerRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
