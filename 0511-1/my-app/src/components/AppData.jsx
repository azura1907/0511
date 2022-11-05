import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function AppData() {
    const themeContext = useContext(ThemeContext)

    return (
        <ul>
            <li className={`text-${themeContext}`}>1</li>
            <li className={`text-${themeContext}`}>2</li>
            <li className={`text-${themeContext}`}>3</li>
        </ul>
    )
}
export default AppData