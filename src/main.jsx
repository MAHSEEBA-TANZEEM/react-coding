import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
