import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContext from './context/theme'
import NotificationsProvider from './context/notifications'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

// Create a client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContext>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </ThemeContext>
    </QueryClientProvider>
  </React.StrictMode>
);


