import React from 'react'
import img from '../../assets/search.svg'
import './Search.css'

export default function Search() {
    return (

        <div className="form_search">
            <button className="btn_search"><img src={img} alt="search" /></button>
            <input type="text" className="search-field" placeholder="Поиск организации" />
        </div>

    )
}

