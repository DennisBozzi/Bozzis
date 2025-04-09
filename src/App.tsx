import { Toaster } from 'sonner';
import HomePage from './screens/homePage';
import LoginPage from './screens/loginPage';
import { useAuth } from './supabase/authProvider';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'
import Layout from './components/layout';
import TenantPage from './screens/tenantPage';
import ResidencePage from './screens/residencePage';

function App() {

  const session = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={!session ? <LoginPage /> : <Navigate to="/home" />} />
        <Route path="/home" element={session ? <Layout children={<HomePage />} title="Home" /> : <Navigate to="/" />} />
        <Route path="/residences" element={session ? <Layout children={<ResidencePage />} title="Residences" /> : <Navigate to="/" />} />
        <Route path="/residences/:name" element={session ? <Layout children={<ResidencePage />} title="Residence Details" /> : <Navigate to="/" />} />
        <Route path="/tenants" element={session ? <Layout children={<TenantPage />} title="Tenants" /> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App