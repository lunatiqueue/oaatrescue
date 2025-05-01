import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/About';
import { Adopt } from './pages/Adopt';
import { AnimalDetails } from './pages/AnimalDetails';
import { FosterPage } from './pages/Foster';
import { EventsPage } from './pages/Events';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';

import { RequireAuth } from './components/RequireAuth';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <Routes>
      {/* Public login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Main site */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="adopt" element={<Adopt />} />
        <Route path="animal/:id" element={<AnimalDetails />} />
        <Route path="foster" element={<FosterPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Admin (protected) */}
        <Route
          path="admin"
          element={
            <RequireAuth>
              <AdminPage />
            </RequireAuth>
          }
        />

        {/* 404 */}
        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  );
}

export default App;
