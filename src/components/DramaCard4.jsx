import { useContext, useEffect, useState } from "react"
import { DramaticWrapper } from "../hoc/SectionWrapper"
import Tilt from 'react-parallax-tilt'
import { Context } from "../context/appContext"
import { Input, Textarea } from "@nextui-org/react";

import antagonism_img from '../img/antagonism.jpg'
import opposition_img from '../img/opposition.jpg'
import half_img from '../img/half.jpg'

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
                    <Input onChange={onChange} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={title} />
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

function DramaCard2({ title, text, image, example, onChange, position }) {

    const { actions } = useContext(Context);
    const [same, setSame] = useState('')
    const [allies, setAllies] = useState('')
    const [gate, setGate] = useState('')

    useEffect(() => {
        if (same !== "" && allies !== "" && gate !== "") {
            let opposition = `${same}, ${allies}, ${gate}`
            actions.handleOpposition(opposition)
        }
    }, [same, allies, gate])

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
                    <Input onChange={(e) => setSame(e.target.value)} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder="Same goal" aria-label="Same goal" />
                    <Input onChange={(e) => setAllies(e.target.value)} className="mt-2 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder='Distance from goal' aria-label="Distance from goal" />
                    <Input onChange={(e) => setGate(e.target.value)} className="mt-2 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder='Test resolve' aria-label="Test resolve" />
                </div>
            </div>
        </div>
    )
}

const CardWrapper4 = () => {
    const { store, actions } = useContext(Context);
    const {
        antagonism,
        opposition,
        half_truth
    } = store.dramatic_basis


    return (
        <>
            <DramaCard
                title={store.titles[12]}
                text={antagonism.def}
                image={antagonism_img}
                example={antagonism.example}
                onChange={(e) => actions.handleAntagonism(e.target.value)}
                position={"object-top"}
            />
            <DramaCard2
                title={store.titles[13]}
                text={opposition.def}
                image={opposition_img}
                example={opposition.example}
                onChange={(e) => actions.handleOpposition(e.target.value)}
                position={"object-center"}
            />
            <DramaCard
                title={store.titles[14]}
                text={half_truth.def}
                image={half_img}
                example={half_truth.example}
                onChange={(e) => actions.handleHalf(e.target.value)}
                position={"object-center"}
            />
        </>
    )

}

export default DramaticWrapper(CardWrapper4, "Opposition"); 
