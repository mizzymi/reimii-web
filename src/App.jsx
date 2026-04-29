import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from './components/i18n/LanguageContext';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import PageLayout from './components/layout/PageLayout.jsx';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import ProjectDetail from './pages/ProjectDetail';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

const ThemedApp = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''} style={{ colorScheme: isDark ? 'dark' : 'light' }}>
      {children}
    </div>
  );
};

const AppRoutes = () => (
  <Routes>
    <Route element={<PageLayout />}>
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Proyectos" element={<Proyectos />} />
      <Route path="/Proyectos/:slug" element={<ProjectDetail />} />
      <Route path="/Nosotros" element={<Nosotros />} />
      <Route path="/Contacto" element={<Contacto />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ThemedApp>
            <AppRoutes />
          </ThemedApp>
        </Router>
        <Toaster />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
