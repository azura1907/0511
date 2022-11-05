import { createContext } from "react"

const defaultValue = {
    removePost: () => {

    }
}

export const PostContext = createContext(defaultValue)