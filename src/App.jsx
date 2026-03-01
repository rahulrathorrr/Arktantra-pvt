import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import TheWork from './Pages/TheWork'
import OurApproach from './Pages/OurApproach'
import WhoWeWorkWith from './Pages/WhoWeWorkWith'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsOfService from './Pages/TermsOfService'

const App = () => {
  const router= createBrowserRouter([
    {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/the-work',
        element: <TheWork/>
      },
      {
        path:'/our-approach',
        element: <OurApproach/>
      },
      {
        path:'/who-we-work-with',
        element: <WhoWeWorkWith/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/privacy',
        element: <PrivacyPolicy/>
      },
      {
        path:'/terms',
        element: <TermsOfService/>
      },
    ]
    }

  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App