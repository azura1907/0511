import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


function AppContent() {
    const themeContext = useContext(ThemeContext)
    console.log(themeContext)
    return (
        <p className={`text-${themeContext} bg-${themeContext}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae nihil blanditiis vel rerum.
            Amet ipsam voluptas aliquam molestiae velit alias laborum doloribus eius.
            Nulla, iure dolore facilis assumenda ipsam ullam.
        </p>)
}
export default AppContent