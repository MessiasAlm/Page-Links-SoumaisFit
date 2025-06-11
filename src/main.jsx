import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './pages/app'
import Plans from './pages/plansPage/plans';
import Modalities from './pages/modalitiesPage/modalities';

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
    path: "modalities",
    element: <Modalities/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
