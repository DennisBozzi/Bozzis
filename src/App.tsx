import { Toaster } from 'sonner';
import HomePage from './screens/homePage';
import LoginPage from './screens/loginPage';
import { useAuth } from './supabase/authProvider';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'
import Layout from './components/layout';

function App() {

  const session = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={!session ? <LoginPage /> : <Navigate to="/home" />} />
        <Route path="/home" element={session ? <Layout children={<HomePage />} /> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App