import { useContext } from 'react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import battle2_img from '../img/battle2.png'
import { Context } from '../context/appContext';
import { Button, Input, Text } from '@nextui-org/react';


function Battle() {

    const { store, actions } = useContext(Context);

    console.log(store.concept)

    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={battle2_img} />
            </div>
            <div className="inner">
                <div className="absolute top-[20%] left-[37%]">
                    <h1 className='text-black font-secondary text-8xl'><b>The Battle</b></h1>
                </div>
                <div className="absolute top-[40%] left-[28%] w-[700px]">
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px]'>
                        <p className='text-black font-tertiary text-3xl' >Increasing stakes call for desperate decisions.</p>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px] mt-10'>
                        <div className='flex text-white font-tertiary text-3xl'>
                            <Text className='mx-3 text-black' size={28}>{"The protagonist decides "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.changed}</Text>
                        </div>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px]'>
                        <div className='flex text-white font-tertiary text-3xl'>
                            <Text className='mx-3 text-black' size={28}>{"and goes on "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.battle}</Text>
                        </div>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px] mb-8'>
                        <div className='flex text-white font-tertiary text-3xl'>
                            <Text className='mx-3 text-black' size={28}>{"only to "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.death}</Text>
                        </div>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[80px]'>
                        <Input onChange={() => actions.handleResistance} className="mt-4 w-[70%] mx-auto" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder="Battle" />
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px] pt-10'>
                        <Button className='px-5' shadow ghost rounded size="lg" color="gradient" auto>
                            <p className='text-black font-tertiary text-2xl' >Save</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Battle, "Battle");