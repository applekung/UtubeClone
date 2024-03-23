import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RoutingError from './pages/RoutingError.jsx'
import VideoList from './pages/VideoList.jsx'
import VideoDetail from './pages/VideoDetail.jsx'

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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
