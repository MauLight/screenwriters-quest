import { TiltWrapper } from '../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import f_logline from '../img/f_logline.png'
import { useContext } from 'react';
import { Context } from '../context/appContext';
import { Text } from '@nextui-org/react';


function F_Logline() {

    const { store, actions } = useContext(Context)

    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px] w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={f_logline} />
            </div>
            <div className="inner">
                <div className="absolute top-[50%] left-[34%]">
                    <h1 className='text-white font-secondary text-6xl mx-auto mb-10'>
                        <b>
                            <TypeAnimation sequence={[
                                'FUNCTIONAL LOGLINE', 3000,
                                ' FUNCTIONAL LOGLINE', 3000,
                                ' FUNCTIONAL LOGLINE', 3000,
                            ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </b>
                    </h1>
                </div>
                <div className="absolute top-[64%] left-[27%]">
                    <div className="flex flex-col justify-center">
                        <div className='flex text-white font-tertiary text-3xl'>
                            <Text className='mx-3 text-white' size={28}>{"After "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.positive}</Text>
                            <Text className='mx-3 text-white' size={28}>{" a character who has "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.flaw}</Text>
                            <Text className='mx-3 text-white' size={28}>{" because of "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.lie}</Text>
                        </div>
                        <div className='flex text-white font-tertiary text-3xl'>
                            <Text className='mx-3 text-white' size={28}>{"wants to "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.want}</Text>
                            <Text className='mx-3 text-white' size={28}>{" but faces "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.antagonism}</Text>
                            <Text className='mx-3 text-white' size={28}>{" in the form of "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.opposition}</Text>
                        </div>
                        <div className='flex text-white font-tertiary text-3xl'>
                            <Text className='mx-3 text-white' size={28}>{" and needs to "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.need}</Text>
                            <Text className='mx-3 text-white' size={28}>{" to "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.rev}</Text>
                        </div>
                        <div className='mt-2 pl-5'>
                            <textarea id="Message" className="rounded-full h-[100px] w-[100%] mx-auto border-solid border-2 border-gray-300"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(F_Logline, "F_Logline");