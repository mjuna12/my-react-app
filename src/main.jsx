import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import Header from './components/general/header.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import './index.css'
import ProductsPage from './Pages/product.jsx'
import ProfilePage from './Pages/profile.jsx'
import DetailPage from './Pages/detail.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element:  <ProductsPage/>
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/products/:id',
    element: <DetailPage />

  
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
