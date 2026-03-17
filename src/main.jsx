import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fruits from './Components/Fruits'
import { createHashRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Dairy from './Components/Dairy'
import SeaFood from './Components/SeaFood'
import ViewAll from './Components/ViewAll'
import Layout from './Components/Layout'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Heart from './Components/Heart'
import Wishlist from './Components/Heart'
import { CartProvider } from './Components/Both'
import Cart from './Components/AddToCart'
import Login from './Components/Login'



const router = createHashRouter([
  {
    path: "/",
    element: <CartProvider>
      <Layout />
    </CartProvider>,
    children: [
      {
        path: "/",
        element: (
          <App />
        )
      },
      {
        path: "/fruits",
        element: <Fruits />
      },
      {
        path: "/dairy",
        element: <Dairy />
      },
      {
        path: "/seafood",
        element: <SeaFood />,
      },
      {
        path: "/viewall",
        element: <ViewAll />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/heart",
        element: <Heart />,
      },
      {
        path: "/addtocart",
        element: <Cart/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ]
  },


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />


  </StrictMode>
)
