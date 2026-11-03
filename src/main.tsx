import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ErrorBoundary} from './components/ErrorBoundary.tsx';
import './index.css';

// Keep clean URLs by stripping internal platform auth token parameters from the address bar
try {
  const currentUrl = new URL(window.location.href);
  let hasToken = false;
  const keysToDelete: string[] = [];
  currentUrl.searchParams.forEach((_, key) => {
    if (key.startsWith('__aistudio') || key.includes('auth_token')) {
      keysToDelete.push(key);
      hasToken = true;
    }
  });
  if (hasToken) {
    keysToDelete.forEach(k => currentUrl.searchParams.delete(k));
    const cleanSearch = currentUrl.searchParams.toString();
    const cleanUrl = currentUrl.pathname + (cleanSearch ? `?${cleanSearch}` : '') + currentUrl.hash;
    window.history.replaceState(null, '', cleanUrl || '/');
  }
} catch {
  // Silent fallback
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
