import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


function AppButton() {
    const themeContext = useContext(ThemeContext)

    return (
        <button className={`text-${themeContext} bg-${themeContext}`}>Test</button>
    )
}
export default AppButton