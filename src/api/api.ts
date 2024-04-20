import axios from 'axios'

export type searchCityType = {
    current: Current
    location: Location
}
type Location = {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}
type Current = {
    last_updated_epoch: number
    last_updated: string
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
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
    air_quality: {
        co: number
        no2: number
        o3: number
        so2: number
        pm2_5: number
        pm10: number
        'us-epa-index': number
        'gb-defra-index': number
    }
}

export const CITYES_LIMIT = 10
export const WEATHER_API_KEY = 'dd2c1abd971f40cb96c80634241704'
export const GEO_CITIES = `https://wft-geo-db.p.rapidapi.com/v1/geo`

export const optionsGetAllCities = {
    method: 'GET',
    withCredentials: true,
    headers: {
        'X-RapidAPI-Key': 'cb69734ba7mshb3bfe3545d6eaefp13ab57jsnf9b34dfd4359',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
    params: {
        minPopulation: '1000',
    },
}

const settingsWheatherApi = {
    withCredentials: true,
}

export const wheatherApi = {
    setTheCity(city: string) {
        return axios.get(`${GEO_CITIES}/cities?limit=${CITYES_LIMIT}&namePrefix=${city}`, optionsGetAllCities)
    },
    searchCity(city: string) {
        return axios.get<searchCityType>(
            `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`,
            settingsWheatherApi
        )
    },
    weatherDetails(city: string) {
        return axios.get<searchCityType>(
            `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=14`,
            settingsWheatherApi
        )
    },
}
