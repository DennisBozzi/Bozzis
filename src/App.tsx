import { Toaster } from 'sonner';
import LoginPage from './screens/loginPage';
import { isAuthenticated } from './lib/supabase';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'
import HomePage from './screens/homePage';

function App() {

  const session = isAuthenticated();

  return (
    <Router>
      <Routes>
        <Route path="/" element={!session ? <LoginPage /> : <Navigate to="/home" />} />
        <Route path="/home" element={session ? <HomePage /> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App