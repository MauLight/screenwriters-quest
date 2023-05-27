import { Button } from '@nextui-org/react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import lesson03 from '../img/lesson03.png'


function Lesson03({ number }) {
    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={lesson03} />
            </div>
            <div className="inner">
                <div className="absolute top-[55%] left-[86%] tranlate-x-[-25%] translate-y-[-200%]">
                    <h1 className='text-black font-secondary text-8xl'>{number}</h1>

                </div>
                <div className="absolute top-[55%] left-[56%] tranlate-x-[-25%] translate-y-[-150%]">
                    <h1 className='text-black font-secondary text-6xl'>The Dramatic Basis of</h1>

                </div>
                <div className="absolute top-[65%] left-[71%] tranlate-x-[-50%] translate-y-[-110%]">
                    <h1 className='text-black font-secondary text-8xl'>{"a "}
                        <b>
                            <TypeAnimation sequence={[
                                'STORY', 3000,
                                ' STORY', 3000,
                                ' STORY', 3000,
                            ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </b>
                    </h1>
                </div>
                <div className="absolute top-[70%] left-[74%]">
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                        <Button className='mr-10 px-2' size="xl" color="primary" bordered rounded >
                            <p className='font-tertiary text-xl'><b>Watch Lesson</b></p>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Lesson03, "Lesson_03", "03");