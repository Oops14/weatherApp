import { useNavigate } from "react-router-dom"

type City = {
    name: string
    id: number
    country: string
    countryCode: string
    latitude: number
    longitude: number
    population: number
    region: string
    regionCode: string
    regionWdId: string
    type: string
    wikiDataId: string
}
type SearchDropdownType = {
    setCities: (cities: string) => void
    cityArray: City[]
    getCityWeather: (city: string) => void;
}

export const SearchDropdown = (props: SearchDropdownType) => {
    const navigate = useNavigate();

    if (props.cityArray === undefined || props.cityArray.length === 0) {
        return
    }

    const setCity = (city: string) => {
        props.setCities('')
        props.getCityWeather(city);
    }

    return (
        <div className="dropdown">
            <div className="search_dropdown">
                {props.cityArray.map((i) => {
                    return (
                        <div key={i.id} onClick={() => setCity(i.name)}>
                            {i.name} <span>({i.countryCode})</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
