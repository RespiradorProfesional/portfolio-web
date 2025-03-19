import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx'
import ProjectSpecificPage from './pages/ProjectSpecificPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about_me',
    element: <AboutPage />
  },
  {
    path: '/projects',
    element: <ProjectPage />
  },
  {
    path: '/experience',
    element: <ExperiencePage />
  },
  {
    path: '/projects/:id',
    element: <ProjectSpecificPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
