import React from 'react'

type SearchFormType = {
    cities: string
    fetchCities: (cityKeywords: string) => Promise<void>
    setCities: (cities: string) => void
}

export const SearchForm = (props: SearchFormType) => {
    const onChangeCityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const city = e.currentTarget.value
        props.setCities(city)
        props.fetchCities(city)
    }

    return (
        <div>
            <input type="text" className="search_form" value={props.cities} onChange={onChangeCityHandler} />
        </div>
    )
}
