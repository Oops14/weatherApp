import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/features/404/ErrorPage.tsx'
import { CurrentCityWeather } from './components/current-city-wheather/CurrentCityWeather.tsx'

const router = createBrowserRouter([
    {
        path: '*',
        element: <App />,
        errorElement: <Navigate to="/404" />,
    },
    // {
    //     path: '/404',
    //     element: <ErrorPage />,
    // },
    {
        path: '/wheather-details',
        element: <CurrentCityWeather />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
