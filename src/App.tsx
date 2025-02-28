import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Header from './components/Header';
import Login from './pages/login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/pokemon/:id" element={<ItemDetail />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </AuthProvider>
  );
};

export default App;
