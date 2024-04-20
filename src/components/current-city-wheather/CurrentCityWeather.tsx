import { searchCityType } from '../../api/api'

type CurrentCityWeatherType = {
    currentCityInfo: searchCityType
    setPopup: (popup: boolean) => void
}

export const CurrentCityWeather: React.FC<CurrentCityWeatherType> = ({ currentCityInfo, setPopup }) => {

    const showPopup = () => {
        setPopup(true)
    }

    return (
        <section className="current_city_section">
            <div className="current_weather_info_block">
                <div className="weather_details_block">
                    <div className="wheather_image">
                        <img className="wheather_image_img" src={currentCityInfo.current.condition.icon} alt="#" />
                    </div>
                    <p>{currentCityInfo.current.condition.text}</p>
                    <p className="location_country">{currentCityInfo.location.country}</p>
                    <h2 className="current_city">{currentCityInfo.location.name}</h2>
                    <div className="weather_info">
                        <span>{Math.floor(currentCityInfo.current.temp_c)}°C</span>
                        <span> | </span>
                        <span>{currentCityInfo.current.condition.text}</span>
                    </div>
                </div>
                <div>
                    <button className="details_btn" onClick={showPopup}>
                        14 days Weather
                    </button>
                </div>
            </div>
        </section>
    )
}
