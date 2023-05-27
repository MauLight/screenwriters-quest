import { useContext, useEffect, useState } from "react"
import { DramaticWrapper } from "../hoc/SectionWrapper"
import Tilt from 'react-parallax-tilt'
import { Context } from "../context/appContext"
import { Input, Radio, Textarea } from "@nextui-org/react";

import flaw_img from '../img/flaw.jpg'
import want_img from '../img/want.jpg'
import need_img from '../img/need.jpg'
import self_img from '../img/self.jpg'
import fall_img from '../img/fall.jpg'

const ImageHolder = ({ title, example, img, position }) => {
    return (
        <div className='mx-auto w-[70vh] h-[70vh] object-cover object-center rounded-[30px] group relative overflow-hidden'>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className={`mx-auto w-[70vh] h-[70vh] object-cover ${position} rounded-[30px] group-hover:scale-125 transition-all duration-500`} src={img} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 text-white font-secondary group-hover:bottom-6 transition-all duration-500 z-50'>{title}</div>
            {/* title */}
            <div className='absolute -bottom-full font-tertiary left-2 px-10 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-2xl text-white'>{example}</span></div>
        </div>
    )
}

function DramaCard({ title, text, image, example, onChange, position }) {

    return (
        <div className='rounded-[30px] w-[100%] h-[750px] columns-2 flex justify-center items-center'>
            <div className="text w-[50%] mx-auto px-[80px]">
                <h1 className="text-white font-secondary text-6xl mb-5">{title}</h1>
                <p className="text-white font-tertiary text-3xl">{text}</p>
                <div className="pr-7">
                    <Input onChange={onChange} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={title} aria-label={title} />
                </div>
            </div>
            <div className="flex mx-auto">
                <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} glareEnable={true} glareMaxOpacity={0.55} glareColor={"white"} glareBorderRadius='30px' >
                    <ImageHolder img={image} title={title} example={example} position={position} />
                </Tilt>
            </div>
        </div>
    )
}

function WantCard({ title, text, image, example, onChange, position, place01, place02 }) {

    const { store, actions } = useContext(Context);
    const [desire, setDesire] = useState('')
    const [goal, setGoal] = useState('')

    useEffect(() => {
        if (desire !== "" && goal !== "") {
            let want = `${desire} by achieving ${goal}`
            actions.handleWant(want)
        }
    }, [desire, goal])

    return (
        <div className='rounded-[30px] w-[100%] h-[750px] columns-2 flex justify-center items-center'>
            <div className="flex mx-auto">
                <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} glareEnable={true} glareMaxOpacity={0.55} glareColor={"white"} glareBorderRadius='30px' >
                    <ImageHolder img={image} title={title} example={example} position={position} />
                </Tilt>
            </div>
            <div className="text w-[50%] mx-auto px-[80px]">
                <h1 className="text-white font-secondary text-6xl mb-5">{title}</h1>
                <p className="text-white font-tertiary text-3xl">{text}</p>
                <div className="pr-8">
                    <Input onChange={(e) => setDesire(e.target.value)} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={place01} aria-label={place01} />
                    <Input onChange={(e) => setGoal(e.target.value)} className="mt-5 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={place02} aria-label={place02} />
                </div>
            </div>
        </div>
    )
}

function SelfCard({ title, text, image, example, onChange, position, climax }) {

    const { store, actions } = useContext(Context);
    const [psycho, setPsycho] = useState('')
    const [moral, setMoral] = useState('')

    useEffect(() => {
        if (psycho !== "" && moral !== "" && climax === "1") {
            let self_rev = `${psycho} and decides to ${moral}`
            actions.handleSelf(self_rev)
        }
        else if (psycho !== "" && moral !== "" && climax === "2") {
            let self_rev = `Fails to ${psycho} and decides to ${moral}`
            actions.handleSelf(self_rev)
        }
    }, [psycho, moral])

    return (
        <div className='rounded-[30px] w-[100%] h-[750px] columns-2 flex justify-center items-center'>
            <div className="flex mx-auto">
                <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} glareEnable={true} glareMaxOpacity={0.55} glareColor={"white"} glareBorderRadius='30px' >
                    <ImageHolder img={image} title={title} example={example} position={position} />
                </Tilt>
            </div>
            <div className="text w-[50%] mx-auto px-[80px]">
                <h1 className="text-white font-secondary text-6xl mb-5">{title}</h1>
                <p className="text-white font-tertiary text-3xl">{text}</p>
                <div className="pr-8">
                    <Input onChange={(e) => setPsycho(e.target.value)} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder="Psychological" aria-label="Psychological" />
                    <Input onChange={(e) => setMoral(e.target.value)} className="mt-5 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder='Moral' aria-label="Moral" />
                </div>
            </div>
        </div>
    )
}

const CardWrapper3 = () => {
    const { store, actions } = useContext(Context);
    const [climax, setClimax] = useState("1");

    useEffect(() => {
        console.log(climax)
        if (store.rev !== "SELF-REVELATION" && climax === "1") {
            actions.handleSelf("SELF-REVELATION")
        }
        else if (store.rev !== "SELF-REVELATION" && climax === "2") {
            actions.handleSelf("FALL INTO LIE")
        }
        else if (store.rev === "SELF-REVELATION" && climax === "2") {
            actions.handleSelf("FALL INTO LIE")
        }

    }, [climax])

    const { concept_idea,
        community_value,
        myth,
        theme,
        truth,
        contra_positive,
        lie,
        flaw,
        want,
        need,
        self_revelation,
        fall_into_lie
    } = store.dramatic_basis

    return (
        <>
            <DramaCard
                title={store.titles[7]}
                text={flaw.def}
                image={flaw_img}
                example={flaw.example}
                onChange={(e) => actions.handleFlaw(e.target.value)}
                position={"object-canter"}
            />
            <WantCard
                title={store.titles[8]}
                text={want.def}
                image={want_img}
                example={want.example}
                onChange={(e) => actions.handleWant(want_val)}
                position={"object-bottom"}
                place01={"Desire"}
                place02={"Goal"}
            />
            <DramaCard
                title={store.titles[9]}
                text={need.def}
                image={need_img}
                example={need.example}
                onChange={(e) => actions.handleNeed(e.target.value)}
                position={"object-center"}
            />
            <div className="flex justify-center h-[200px] py-[20px]">
                <Radio.Group label="Choose your Climax." orientation="horizontal" value={climax} onChange={setClimax}>
                    <Radio value="1" description="Character achieves discovering the need.">
                        <p className="text-white text-tertiary text-3xl">Self-Revelation</p>
                    </Radio>
                    <Radio value="2" description="Character fails in discovering the need.">
                        <p className="text-white text-tertiary text-3xl">Fall-into-Lie</p>
                    </Radio>
                </Radio.Group>
            </div>
            {
                climax && climax === "1" ? (
                    <SelfCard
                        title={store.titles[10]}
                        text={self_revelation.def}
                        image={self_img}
                        example={self_revelation.example}
                        onChange={(e) => actions.handleRev(e.target.value)}
                        position={"object-top"}
                        climax={climax}
                    />
                )
                    :
                    <SelfCard
                        title={store.titles[11]}
                        text={fall_into_lie.def}
                        image={fall_img}
                        example={fall_into_lie.example}
                        onChange={(e) => actions.handleRev(e.target.value)}
                        position={"object-center"}
                        climax={climax}
                    />
            }
        </>
    )

}

export default DramaticWrapper(CardWrapper3, "Myth");
