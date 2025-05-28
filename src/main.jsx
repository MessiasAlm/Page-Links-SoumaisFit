import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/app'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Plans from './pages/plansPage/plans';
import Horarios from './pages/horariosPage/horarios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "plans",
    element: <Plans/>
  },
  {
    path: "horarios",
    element: <Horarios/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
