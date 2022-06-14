import AppLayout from '@/Layout'
import React, { lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@pages/Home'))
const About = lazy(() => import(/* webpackChunkName: "about" */ '@pages/About'))
const Dispatch = lazy(() => import(/* webpackChunkName: "dispatch" */ '@pages/Dispatch'))
const Chart = lazy(() => import(/* webpackChunkName: "chart" */ '@pages/Chart'))
const Chat = lazy(() => import(/* webpackChunkName: "chat" */ '@pages/Chat'))

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'dispatch',
          element: <Dispatch />
        },
        {
          path: 'chart',
          element: <Chart />
        },
        {
          path: 'chat',
          element: <Chat />
        },
        { path: '*', element: <div>404</div> }
      ]
    }
  ]
  const routesElements = useRoutes(routes)
  return routesElements
}

export default Routes
