import { Text } from '@nextui-org/react'
import Tilt from 'react-parallax-tilt'
import { UserAuth } from '../context/authContext'
import { arr } from '../utils/array'

const ImageHolder = ({ title, logline, genre, img, position }) => {
    return (
        <div className='mx-auto w-[40vh] h-[60vh] object-cover object-center rounded-[30px] group relative overflow-hidden'>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className={`mx-auto w-[40vh] h-[60vh] object-cover ${position} rounded-[30px] group-hover:scale-125 transition-all duration-500`} src={img} alt='' />
            {/* pretitle */}
            <div className="flex">
                <div className='absolute -bottom-full left-12 text-white font-secondary group-hover:bottom-6 transition-all duration-500 z-50'>{`${title} - ${genre}`}</div>
                {/* title */}
            </div>
            <div className='absolute -bottom-full font-tertiary left-2 px-10 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-lg text-white'>{logline}</span></div>
        </div>
    )
}

export default function Account() {

    const { myscripts } = arr[0]
    console.log(myscripts)

    const { user } = UserAuth()

    return (
        <div className='w-[100%] h-auto mx-auto relative z-0 px-20'>
            <div>
                <img className='mx-auto' src={user.photoURL} />
                <div className='flex justify-center'>
                    <Text h1 className='font-primary' size={50} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} >{user.displayName}</Text>
                </div>
                <div className='flex justify-center'>
                    <Text p className='font-primary font-black w-[40%] my-10' size={20} >{arr[0].biography}</Text>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    myscripts.map((script) => (
                        <Tilt className='mx-5 mx-auto my-10' tiltMaxAngleX={2.5} tiltMaxAngleY={2.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                            <ImageHolder title={script.title} genre={script.genre} logline={script.logline} img={script.cover} />
                        </Tilt>
                    ))
                }
            </div>
        </div>
    )
}
