import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx'
import SpecificPage from './pages/SpecificPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import ContactPage from './pages/ContactPage.jsx'

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
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/projects/:id',
    element: <SpecificPage />
  },
  ,
  {
    path: '/experience/:id',
    element: <SpecificPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
