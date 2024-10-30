import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Error from './routes/Error.jsx'
import Calendar from './routes/Calendar.jsx'
import Car from './routes/Car.jsx'
import News from './routes/News.jsx'
import Selection from './routes/Selection.jsx'
import Shop from './routes/Shop.jsx'
import Stream from './routes/Stream.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/car', element: <Car /> },
      { path: '/news', element: <News /> },
      { path: '/selection', element: <Selection /> },
      { path: '/shop', element: <Shop /> },
      { path: '/Stream', element: <Stream /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
