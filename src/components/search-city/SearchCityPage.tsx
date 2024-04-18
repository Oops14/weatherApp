import { useEffect, useState } from 'react'
import { searchCityType, wheatherApi } from '../../api/api'
import { SearchForm } from './SearchForm'
import { SearchDropdown } from './SearchDropdown'
import { CurrentCityWeather } from '../current-city-wheather/CurrentCityWeather'
import * as s from './search-city-pages.css';

export const SearchCityPage = () => {
    const [cities, setCities] = useState<string>('')
    const [cityArray, setCityArray] = useState([])
    const [currentCityInfo, setCurrentCityInfo] = useState<searchCityType>()

    const fetchCities = (city: string) => {
        return wheatherApi
            .setTheCity(city)
            .then((res) => {
                setCityArray(res.data.data)
            })
            .catch((err) => console.log(err))
    }

    // Get the city info from the dropdown.
    const getCityWeather = (city: string) => {
        const response = wheatherApi
            .searchCity(city)
            .then((res) => {
                setCurrentCityInfo(res.data)
            })
            .catch((err) => alert(err))

        return response
    }

    useEffect(() => {
        console.log(currentCityInfo)
    }, [currentCityInfo])

    return (
        <div className="main_search_page">
            <div className="container">
                <div className={'search_city_block bottom-20'}>
                    <h3 className="search_page_title">Enter the city name.</h3>
                    <SearchForm fetchCities={fetchCities} cities={cities} setCities={setCities} />
                    {cities && (
                        <SearchDropdown cityArray={cityArray} setCities={setCities} getCityWeather={getCityWeather} />
                    )}
                </div>

                {currentCityInfo && <CurrentCityWeather />}
            </div>
        </div>
    )
}
