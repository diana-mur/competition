import BlueButton from "../Buttons/BlueButton/BlueButton"
import "./Add.css"

export default function Add({ }) {
    return (
        <div className="addBg">
            <div className="form formAdd">
                <h3>Добавление образовательной организации</h3>
                <input type="text" className="inputForm" placeholder="Название организации" />
                <input type="text" className="inputForm" placeholder="Филиал" />
                <input type="text" className="inputForm" placeholder="Логин" />
                <BlueButton text={'Добавить'} />
            </div>
        </div>
    )
}