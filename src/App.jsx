import { useEffect } from 'react';
import { AuthProvider, useAuth } from './components/Context'; 
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// TEMA
import "primereact/resources/themes/lara-light-indigo/theme.css";
// NUCLEO
import "primereact/resources/primereact.min.css";
// ICONOS
import "primeicons/primeicons.css";
// PRIMEFLEX
import 'primeflex/primeflex.css';

// // NAVBAR
import Navigation from './components/Navigation/Navigation';

// // PAGES
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Bank from './pages/Bank';
import Trade from './pages/Trade';


function App() {

  const { user, searchUser } = useAuth();
  // const user = null;

  useEffect(() => {
    if (!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))) {
      if ( user === null || user === undefined ) {
        searchUser();
      }
    }
  })

  return (
    <>
      <div>
        { user !== null ? <AuthenticatedRoutes /> : <GuestRoutes /> }
      </div>
    </>
  )
}

const AuthenticatedRoutes = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/trade" element={<Trade />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

const GuestRoutes = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

const MainApp = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default MainApp