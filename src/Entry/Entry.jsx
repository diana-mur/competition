import Add from "../Add/Add";
import BlueButton from "../Buttons/BlueButton/BlueButton";
import Header from "../Header/Header";
import "./Entry.css"

export default function Entry({ }) {
    return (
        <>
        {/* <Add /> */}
            <Header visible={false} />
            <div className="sectionEntry">
                <div className="form entryForm">
                    <h3>Авторизация</h3>
                    <input type="text" className="inputForm" placeholder="Логин" />
                    <input type="text" className="inputForm" placeholder="Пароль" />
                    <BlueButton text={'Войти'} />
                </div>
            </div>
        </>
    )
}