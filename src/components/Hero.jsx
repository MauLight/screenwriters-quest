import { Button } from '@nextui-org/react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import hero from '../img/hero.png'


function Hero() {
    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={hero} />
            </div>
            <div className="inner">
                <div className="absolute top-[55%] left-[56%] tranlate-x-[-25%] translate-y-[-80%]">
                    <h1 className='text-white font-secondary text-7xl'>The Creation of</h1>

                </div>
                <div className="absolute top-[65%] left-[70%] tranlate-x-[-50%] translate-y-[-60%]">
                    <h1 className='text-white font-secondary text-8xl'>{"a "}<b>
                            <TypeAnimation sequence={[
                                'MYTH', 3000,
                                ' MYTH', 3000,
                                ' MYTH', 3000,
                            ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </b></h1>
                </div>
                <div className="absolute top-[75%] left-[52%] tranlate-x-[-50%] translate-y-[-80%]">
                    <p className='text-white font-tertiary text-3xl' >Move from a single idea into the <b>MYTH</b> of your story.</p>
                </div>
                <div className="absolute top-[81%] left-[70%]">
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                        <Button className='mr-10 px-2' size="xl" color="warning" bordered rounded >
                            <p className='font-tertiary text-xl'><b>Watch Lesson</b></p>
                        </Button>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default TiltWrapper(Hero, "Hero");