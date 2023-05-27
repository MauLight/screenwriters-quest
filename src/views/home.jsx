import Home_Section1 from '../components/Home_Section1'
import Home_Section2 from '../components/Home_Section2'
import Home_Section3 from '../components/Home_Section3'
import Home_Section4 from '../components/Home_Section4'
import Home_hero from '../components/Home_hero'
import hero from '../img/1.jpg'

export default function Home() {
    return (
        <div>
            <Home_hero />
            <Home_Section1 />
            <Home_Section2 />
            <Home_Section3 />
            <Home_Section4 />
        </div>
    )
}
