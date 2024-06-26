import React from 'react';
import ReactDOM from 'react-dom/client';
import Principal from './pages/principal.jsx'
import Logado from './pages/logado.jsx'
import { GlobalStyle } from './components/Style.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal/>,
  },
  {
    path: "/logado",
    element: <Logado/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
