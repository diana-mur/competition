import BlueButton from "../Buttons/BlueButton/BlueButton";
import Header from "../Header/Header";
import "./Entry.css"

export default function Entry({ }) {
    return (
        <>
            <Header visible={false} />
            <div className="sectionEntry">
                <div className="entryForm">
                    <h3>Авторизация</h3>
                    <input type="text" className="inputEntryForm" placeholder="Логин" />
                    <input type="text" className="inputEntryForm" placeholder="Пароль" />
                    <BlueButton text={'Войти'} />
                </div>
            </div>
        </>
    )
}