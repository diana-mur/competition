import exit from "../assets/exit.svg"
import "./Header.css"

export default function Header({
    visible,
    account
}) {
    return (
        <div className="header">
            {
                visible &&
                <div className="headerButtons">
                    <h4>{account}Администратор</h4>
                    <button><img src={exit} alt="" /></button>
                </div>
            }
        </div>
    )
}