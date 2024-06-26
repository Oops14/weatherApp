import React, { useEffect, useState } from 'react'
import { searchCityType, wheatherApi } from '../../../api/api'

type WeatherPopupType = {
    setPopup: (popup: boolean) => void
    currentCityInfo: searchCityType
}

type HourType = {
    time_epoch: number
    time: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
        text: string
        icon: string
        code: number
    }
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    windchill_c: number
    windchill_f: number
    heatindex_c: number
    heatindex_f: number
    dewpoint_c: number
    dewpoint_f: number
    will_it_rain: number
    chance_of_rain: number
    will_it_snow: number
    chance_of_snow: number
    vis_km: number
    vis_miles: number
    gust_mph: number
    gust_kph: number
    uv: number
}

type ForecastType = {
    date: string
    date_epoch: number
    day: {
        maxtemp_c: number
        maxtemp_f: number
        mintemp_c: number
        mintemp_f: number
        avgtemp_c: number
        avgtemp_f: number
        maxwind_mph: number
        maxwind_kph: number
        totalprecip_mm: number
        totalprecip_in: number
        avgvis_km: number
        avgvis_miles: number
        avghumidity: number
        daily_will_it_rain: number
        daily_chance_of_rain: number
        daily_will_it_snow: number
        daily_chance_of_snow: number
        condition: {
            text: string
            icon: string
            code: number
        }
        uv: number
    }
    astro: {
        sunrise: string
        sunset: string
        moonrise: string
        moonset: string
        moon_phase: string
        moon_illumination: string
    }
    hour: HourType[]
}

const WeatherPopup: React.FC<WeatherPopupType> = ({ setPopup, currentCityInfo }) => {
    const [forecast, setForecast] = useState<ForecastType[]>([])
    const [hourlyForecast, setHourlyForecast] = useState(false)
    const [hourlyForecastData, setHourlyForecastData] = useState<HourType[]>([])

    const closePopup = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        if (target.dataset.popup === 'popup' || target.dataset.popup === 'button-close') {
            setPopup(false)
        }
    }

    const showHourlyWeather = (date: string) => {
        forecast.map((i) => (i.date === date ? setHourlyForecastData(i.hour) : i))
        setHourlyForecast(true)
        console.log(hourlyForecastData)
    }

    const backToDaysWeather = () => {
        setHourlyForecast(false)
    }

    function ToLocalDate(inDate: number) {
        const localDate = new Date()
        let result = [];
        localDate.setTime(inDate * 1000)

        return localDate
    }

    useEffect(() => {
        const cityName = currentCityInfo.location.name
        wheatherApi
            .weatherDetails(cityName)
            .then((res) => {
                setForecast(res.data.forecast.forecastday)
            })
            .catch((err) => alert(err))
    }, [])

    return (
        <div className="popup" data-popup="popup" onClick={closePopup}>
            <button data-popup="button-close" onClick={closePopup} className="popup_close">
                Close
            </button>
            {hourlyForecast && (
                <button onClick={backToDaysWeather} className="back_btn">
                    Back
                </button>
            )}
            <div className="popup_inner">
                {hourlyForecast
                    ? hourlyForecastData.map((i) => {
                          return (
                              <div className="popup_grid_item">
                                  <div className="inner_block">
                                      <div className="date_time">{ToLocalDate(i.time_epoch).toLocaleString().split(' ')[1]}</div>
                                      <div className="date_time">{i.is_day ? 'Day' : 'Night'}</div>
                                      <div className="days_img">
                                          <img className="days_img_inner" src={i.condition.icon} alt="#" />
                                      </div>
                                      <p className="days_condition">{i.condition.text}</p>
                                      <p className="avar_temp">Temperature: {Math.floor(i.temp_c)}</p>
                                      <p className="days_sunset">Feels like: {Math.floor(i.feelslike_c)}</p>
                                      <p className="days_sunrise">Wind direction: {i.wind_dir}</p>
                                  </div>
                              </div>
                          )
                      })
                    : forecast.map((i) => {
                          return (
                              <div className="popup_grid_item">
                                  <div className="inner_block">
                                      <div className="date_time">{i.date}</div>
                                      <div className="days_img">
                                          <img className="days_img_inner" src={i.day.condition.icon} alt="#" />
                                      </div>
                                      <p className="days_condition">{i.day.condition.text}</p>
                                      <p className="avar_temp">Avarage Temp: {i.day.avgtemp_c}</p>
                                      <p className="max_temp">Max Temp: {i.day.maxtemp_c}</p>
                                      <p className="min_temp">Min Temp: {i.day.mintemp_c}</p>
                                      <p className="days_sunrise">Sunrise: {i.astro.sunrise}</p>
                                      <p className="days_sunset">Sunset: {i.astro.sunset}</p>
                                  </div>

                                  <button onClick={() => showHourlyWeather(i.date)} className="hourly_weath_btn">
                                      Hourly weather
                                  </button>
                              </div>
                          )
                      })}
            </div>
        </div>
    )
}

export default WeatherPopup
