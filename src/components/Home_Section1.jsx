import { Text } from "@nextui-org/react"
import { TiltWrapper } from "../hoc/SectionWrapper"
import { useContext } from "react"
import { Context } from '../context/appContext';

import book from '../img/book.svg'
import brain from '../img/brain.svg'
import draft from '../img/draft.svg'
import typewriter from '../img/typewriter.svg'

function Home_Section1() {

    const { store, actions } = useContext(Context)

    return (
        <section className='rounded-[30px] w-[100%] h-auto my-20 py-10'>
            <div className="flex justify-center mt-20">
                <Text className="font-secondary px-1" size={48} weight="bold">{"In "}</Text>
                <Text className="font-secondary px-1" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={48} weight="bold">{"THE QUEST "}</Text>
                <Text className="font-secondary px-1" size={48} weight="bold">{"you'll learn a new way of "}</Text>
                <Text className="font-secondary px-1" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={48} weight="bold">{"writing "}</Text>
                <Text className="font-secondary px-1" size={48} weight="bold">{"and a new way of "}</Text>
                <Text className="font-secondary px-1" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={48} weight="bold">{"living."}</Text>
            </div>
            <div className="flex justify-center">
                <Text className="font-secondary px-1" size={48} weight="bold">{"Transform a single "}</Text>
                <Text className="font-secondary px-1" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={48} weight="bold">{"idea "}</Text>
                <Text className="font-secondary px-1" size={48} weight="bold">{"into a powerful "}</Text>
                <Text className="font-secondary px-1" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={48} weight="bold">{"MYTH "}</Text>
                <Text className="font-secondary px-1" size={48} weight="bold">{"that links to your audience."}</Text>
            </div>
            <div className="flex justify-center mb-20">
                <Text className="font-secondary px-1" size={48} weight="bold">{"Shape your "}</Text>
                <Text className="font-secondary px-1" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={48} weight="bold">{"life "}</Text>
                <Text className="font-secondary px-1" size={48} weight="bold">{"to become a professional writer."}</Text>
            </div>
        </section>
    )
}

export default TiltWrapper(Home_Section1, "Home_section1")
