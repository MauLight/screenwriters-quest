import { useContext } from "react"
import { Context } from "../context/appContext"
import Lesson from "../components/Lesson01"
import DramaCard2 from "../components/DramaCard2"
import Theme from "../components/Theme"
import Conflict from "../components/conflict"

function Dramatic2() {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <Lesson />
            <Theme />
            <div className="px-20">
                <DramaCard2 />
            </div>
            <Conflict />
        </div>
    )
}

export default Dramatic2;
