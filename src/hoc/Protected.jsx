import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/authContext"

export default function Protected({ children }) {
    const { user } = UserAuth()

    if (!user) {
        return <Navigate to='/' />
    }

    return children
}
