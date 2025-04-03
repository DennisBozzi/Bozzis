import { Toaster } from 'sonner';
import { useAuth } from './supabase/authProvider';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'

function App() {

  const session = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={!session ? <>Login Page</> : <Navigate to="/home" />} />
        <Route path="/home" element={session ? <>Home Page</> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App