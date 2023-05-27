import { useContext } from "react"
import { Context } from "../context/appContext"
import Hero from "../components/Hero"
import DramaCard from "../components/DramaCard"
import Myth from "../components/Myth"

function Dramatic() {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <Hero />
            <div className="px-20">
                <DramaCard />
            </div>
            <Myth />
        </div>
    )
}

export default Dramatic;
