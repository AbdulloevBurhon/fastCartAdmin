import { createBrowserRouter, Navigate } from 'react-router-dom'

import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage'
import LoginPage from '@/pages/auth/LoginPage'
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import OrdersPage from '@/pages/orders/OrdersPage'

import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/DashboardLayout'

import NotFoundPage from '@/pages/notFound/NotFound'
import OtherPage from '@/pages/other/OtherPage'
import ProductsPage from '@/pages/products/ProductsPage'
import PrivateRoute from '@/routes/PrivateRoute'

export const router = createBrowserRouter([
 {
  path: '/auth',
  element: <AuthLayout />,
  children: [
   { path: 'login', element: <LoginPage /> },
   { path: 'forgot', element: <ForgotPasswordPage /> },
   { path: 'reset', element: <ResetPasswordPage /> }
  ]
 },
 {
  path: '/',
  element: (
   <PrivateRoute>
    <DashboardLayout />
   </PrivateRoute>
  ),
  children: [
   { index: true, element: <Navigate to="dashboard" replace /> },
   { path: 'dashboard', element: <DashboardPage /> },
   { path: 'orders', element: <OrdersPage /> },
   { path: 'products', element: <ProductsPage /> },
   { path: 'other', element: <OtherPage /> },
   { path: '*', element: <NotFoundPage /> }
  ]
 },
 {
  path: '*',
  element: <NotFoundPage />
 }
])
