import { useContext, useEffect, useState } from "react"
import { DramaticWrapper } from "../hoc/SectionWrapper"
import Tilt from 'react-parallax-tilt'
import { Context } from "../context/appContext"
import { Input } from "@nextui-org/react";

import changed_img from '../img/changed.jpg'
import battle_img from '../img/battle.jpg'
import death_img from '../img/death.jpg'

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

function DramaCard2({ title, text, image, example, onChange }) {

    return (
        <div className='rounded-[30px] w-[100%] h-[750px] columns-2 flex justify-center items-center'>
            <div className="flex mx-auto">
                <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} glareEnable={true} glareMaxOpacity={0.55} glareColor={"white"} glareBorderRadius='30px' >
                    <ImageHolder img={image} title={title} example={example} />
                </Tilt>
            </div>
            <div className="text w-[50%] mx-auto px-[80px]">
                <h1 className="text-white font-secondary text-6xl mb-5">{title}</h1>
                <p className="text-white font-tertiary text-3xl">{text}</p>
                <div className="pr-8">
                    <Input onChange={onChange} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={title} />
                </div>
            </div>
        </div>
    )
}

const CardWrapper5 = () => {
    const { store, actions } = useContext(Context);
    const {
        changed_objective,
        battle,
        death
    } = store.dramatic_basis


    return (
        <>
            <DramaCard
                title={store.titles[15]}
                text={changed_objective.def}
                image={changed_img}
                example={changed_objective.example}
                onChange={(e) => actions.handleChanged(e.target.value)}
                position={"object-bottom"}
            />
            <DramaCard2
                title={store.titles[16]}
                text={battle.def}
                image={battle_img}
                example={battle.example}
                onChange={(e) => actions.handleBattle(e.target.value)}
                position={"object-bottom"}
            />
            <DramaCard
                title={store.titles[17]}
                text={death.def}
                image={death_img}
                example={death.example}
                onChange={(e) => actions.handleDeath(e.target.value)}
                position={"object-bottom"}
            />
        </>
    )

}

export default DramaticWrapper(CardWrapper5, "Battle"); 
