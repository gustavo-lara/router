import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import Error from './routes/Error.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error/>,
    children:[
      {path: "/", element:<Home/>},
      {path: "contact", element:<Contact/>},
    ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
