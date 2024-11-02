import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar';

import Home from "./routes/Home"
import About from './routes/About';
import Contact from './routes/Contact'
import Services from './routes/Services';
import Faq from './routes/Faq.page';

import ErrorPage from './error-page'

import MythicSEO from './pages/Packages.mythicSEO';

import RevvCars from './pages/Portfolio.revvCars';

import Seo from './pages/Services.seo';
import FranchiseSeo from './pages/Services.franchiseSeo'
import LocalSeo from './pages/Services.localSeo'
import SocialMediaMarketing from './pages/Services.socialMediaMarketing';
import SearchOptimization from './pages/Services.searchOptimization';
import ContentWriting from './pages/Services.contentWriting';

function App() {

  const router = createBrowserRouter([

    // MainRoutes
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/services",
      element: <><Navbar /><Services /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/faqs",
      element: <><Navbar /><Faq /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>,
      errorElement: <ErrorPage />,
    },
   
    {
      path: "/contact-us",
      element: <><Navbar/><Contact /></>,
      errorElement: <ErrorPage />,
    },

    // {
    //   path: "/services/seo",
    //   element: <><Navbar /><Seo/></>,
    //   errorElement: <ErrorPage />,
    // },

    // {
    //   path: "/services/franchise-seo",
    //   element: <><Navbar /><FranchiseSeo /></>,
    //   errorElement: <ErrorPage />,
    // },

    // {
    //   path: "/services/local-seo",
    //   element: <><Navbar /><LocalSeo /></>,
    //   errorElement: <ErrorPage />,
    // },

    // {
    //   path: "/services/social-media-marketing",
    //   element: <><Navbar /><SocialMediaMarketing /></>,
    //   errorElement: <ErrorPage />,
    // },

    // {
    //   path: "/services/search-optimization",
    //   element: <><Navbar /><SearchOptimization /></>,
    //   errorElement: <ErrorPage />,
    // },

    // {
    //   path: "/services/content-writing",
    //   element: <><Navbar /><ContentWriting /></>,
    //   errorElement: <ErrorPage />,
    // },
    
    // PortfolioRoutes
    
    {
      path: "/portfolio/revv-cars",
      element: <><Navbar /><RevvCars /></>,
      errorElement: <ErrorPage />,
    },

    // PackageRoutes

    {
      path: "/packages/mythic-seo",
      element: <><Navbar /><MythicSEO /></>,
      errorElement: <ErrorPage />,
    },




  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
