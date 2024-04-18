import { searchCityType } from '../../api/api'

type CurrentCityWeatherType = {
    currentCityInfo: searchCityType
}

export const CurrentCityWeather: React.FC<CurrentCityWeatherType> = ({ currentCityInfo }) => {
    return (
        <section className="current_city_section">
            <div className="current_weather_info_block">
                <div className="weather_details_block">
                    <div className="wheather_image">
                        <img className="wheather_image_img" src={currentCityInfo.current.condition.icon} alt="#" />
                    </div>
                    <p className="location_country">{currentCityInfo.location.country}</p>
                    <h2 className="current_city">{currentCityInfo.location.name}</h2>
                    <div className="weather_info">
                        <span>{currentCityInfo.current.temp_c}°C</span>
                        <span> | </span>
                        <span>{currentCityInfo.current.condition.text}</span>
                    </div>
                </div>
                <div>
                    <button className='details_btn'>More Details</button>
                </div>
            </div>
        </section>
    )
}
