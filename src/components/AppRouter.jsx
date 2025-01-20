import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from '../context';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  const getRouteElement = (route) => {
    // Обработка редиректов
    if (route.redirectTo) return <Navigate to={route.redirectTo} replace />;
    // Стандартные маршруты
    return <route.component />;
  };

  return (
    <Routes>
      {(isAuth ? privateRoutes : publicRoutes).map((route) => (
        <Route
          key={route.name}
          element={getRouteElement(route)}
          path={route.path}
        />
      ))}
    </Routes>
  );
};
