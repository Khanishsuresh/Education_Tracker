// // App.jsx
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Sign from './pages/Sign';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import Registration from './pages/Registration';
// import Admin from './pages/admin copy';

// const PrivateRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/sign" />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/sign" element={<Sign />} />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <Home />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/registration"
//             element={
//               <PrivateRoute>
//                 <Registration />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Sign from './pages/Sign';
import { AuthProvider, useAuth } from './context/AuthContext';
import Registration from './pages/Registration';
import Admin from './pages/Admin1'; // Import the Admin component

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/sign" />;
};

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user && user.role === 'admin' ? children : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/sign" element={<Sign />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PrivateRoute>
                <Registration />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
