import { Button, Text } from "@nextui-org/react"
import { TiltWrapper } from "../hoc/SectionWrapper"
import { useContext } from "react"
import { Context } from '../context/appContext';

import book from '../img/book.svg'
import brain from '../img/brain.svg'
import draft from '../img/draft.svg'
import typewriter from '../img/typewriter.svg'

function Home_Section2() {

    const { store, actions } = useContext(Context)

    return (
        <section className='rounded-[30px] w-[100%] h-auto my-20'>
            <div className="flex flex-col mb-10">
                <div className="flex">
                    <Text className="font-secondary pl-24" weight="bold" size={50}>Are you ready for THE QUEST?</Text>
                </div>
                <div className="flex justify-between w-[100%] px-15 pt-[50px]">
                    <div className="mx-auto">
                        <img src={book} />
                        <Text className="font-secondary flex justify-center mt-5" size={20} weight="bold">Theory</Text>
                    </div>
                    <Text className="font-secondary flex items-center" size={60} weight="bold">+</Text>
                    <div className="mx-auto">
                        <img src={typewriter} />
                        <Text className="font-secondary flex justify-center mt-5" size={20} weight="bold">Practice</Text>
                    </div>
                    <Text className="font-secondary flex items-center" size={60} weight="bold">+</Text>
                    <div className="mx-auto">
                        <img src={brain} />
                        <Text className="font-secondary flex justify-center mt-5" size={20} weight="bold">Growth mindset</Text>
                    </div>
                    <Text className="font-secondary flex items-center" size={60} weight="bold">=</Text>
                    <div className="mx-auto">
                        <img src={draft} />
                        <Text className="font-secondary flex justify-center mt-5" size={20} weight="bold">Finished screenplay</Text>
                    </div>
                </div>
            </div>
            <div className="flex grid-col-2">
                <div className="w-[100%] px-[120px]">
                    <Text className="font-tertiary" size={20}>
                        {store.Home_Section1_Text2}
                    </Text>
                    <Text className="mt-5 font-tertiary" size={20}>
                        {store.Home_Section1_Text3}
                    </Text>
                </div>
                <div className="w-[100%] px-[120px] flex justify-between">
                    <div>
                        <Text className="font-secondary" size={43}>Start</Text>
                        <Text className="font-secondary" size={43} weight="bold">22.05.2023</Text>
                        <Button shadow color="gradient" className="mt-5 py-7 px-5" rounded auto>
                            <Text className="font-secondary" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={38} weight="bold">{"APPLY NOW"}</Text>
                        </Button>
                    </div>
                    <div>
                        <Text className="font-secondary" size={43}>Format</Text>
                        <Text className="font-secondary" size={43} weight="bold">Online</Text>
                    </div>
                    <div>
                        <Text className="font-secondary" size={43}>Duration</Text>
                        <Text className="font-secondary" size={43} weight="bold">13 weeks</Text>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_Section2
