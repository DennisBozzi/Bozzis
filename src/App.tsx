import { Toaster } from 'sonner';
import LoginPage from './screens/loginPage';
import { useAuth } from './supabase/authProvider';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'

function App() {

  const session = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={!session ? <LoginPage/> : <Navigate to="/home" />} />
        <Route path="/home" element={session ? <>Home Page</> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App