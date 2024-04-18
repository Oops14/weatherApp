import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { SearchCityPage } from './components/search-city/SearchCityPage'

function App() {
    return (
        <Routes>
            <Route path={'*'} element={<SearchCityPage />} />
            <Route path="*" element={<Navigate to={'/404'} />} />
        </Routes>
    )
}

export default App
