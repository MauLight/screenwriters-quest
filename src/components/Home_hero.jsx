import { Button, Text } from '@nextui-org/react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import ReactPlayer from 'react-player'
import hero_video from '../img/hero_video.mp4'


function Home_Hero() {
    
    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px] w-[100%] h-[750px]'>
                <ReactPlayer
                    url={hero_video}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="inner">
                <div className="absolute top-[45%] left-[59%]">
                    <h1 className='text-white font-secondary text-5xl'>Write you next screenplay</h1>
                    <p className='text-white font-tertiary text-3xl pl-[185px]' >Like you've never done before.</p>
                </div>
                <div className="absolute top-[56%] left-[64%]">
                    <Text h1 className='text-white font-secondary text-8xl' css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} >{"in "}<b>
                        <TypeAnimation sequence={[
                            '13 WEEKS', 3000,
                            ' 13 WEEKS', 3000,
                            ' 13 WEEKS', 3000,
                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </b>
                    </Text>
                </div>
                <div className="absolute top-[68%] left-[70%]">
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                        <Button className='mr-10 px-2' size="xl" color="gradient" rounded >
                            <Text css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} className='font-tertiary text-4xl'><b>Start Now!</b></Text>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Home_Hero, "Home_Hero");