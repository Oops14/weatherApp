import React from 'react'

type WeatherPopupType = {
    setPopup: (popup: boolean) => void
}

const WeatherPopup: React.FC<WeatherPopupType> = ({ setPopup }) => {
    const closePopup = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target.dataset.user === 'popup' || e.target.dataset.user === 'button-close') {
            setPopup(false)
        }
    }

    return (
        <div className="popup" data-user="popup" onClick={closePopup}>
            <button data-user="button-close" onClick={closePopup} className="popup_close">
                Close
            </button>
            <div className="popup_inner">
                <div className="popup_grid_item">
                    <h3>Info 1</h3>
                    <p>info 2</p>
                    <p>info 3</p>
                    <p>info 4</p>
                    <p>info 5</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherPopup
