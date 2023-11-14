import React from 'react'
import './Admin.css'
import Search from '../Component/Search/Search'
import Header from '../Header/Header'
import BlueButton from '../Buttons/BlueButton/BlueButton'

export default function Admin() {
  return (
    <>
      <Header visible={true}/>
      <div className='container'>
        <div className="row_btn">
          <Search />
          <BlueButton text={'Добавить ОО'} />
        </div>
        <div className="main_admin">
          <h3>Название организации</h3>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
          <a>ГАПОУ "Ташлинский политехнический техникум"(филиал Первомайский)</a>
        </div>

      </div>
    </>
  )
}
