import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import RoutingError from './pages/RoutingError'
import VideoList from './pages/VideoList'
import VideoDetail from './pages/VideoDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RoutingError />,
    children: [
      { index: true, element: <VideoList /> },
      { path: 'videos', element: <VideoList /> },
      { path: 'videos/:keyword', element: <VideoList /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
)
