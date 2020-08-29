import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from 'src/source/modules/Dashboard/DashboardLayout';
import AuthLayout from 'src/source/modules/Auth/AuthLayout';

import LoginView from 'src/resources/views/auth/LoginView';
import RegisterView from 'src/resources/views/auth/RegisterView';

import DashboardView from 'src/resources/views/dashboard/reports/DashboardView';
import AccountView from 'src/resources/views/dashboard/account/AccountView';
import CustomerListView from 'src/resources/views/dashboard/customer/CustomerListView';
import ProductListView from 'src/resources/views/dashboard/product/ProductListView';
import SettingsView from 'src/resources/views/dashboard/settings/SettingsView';

import NotFoundView from 'src/resources/views/errors/NotFoundView';

const routes = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/', element: <Navigate to="/login" /> },
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: <DashboardView /> },
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
