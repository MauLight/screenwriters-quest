import { useContext } from 'react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import opposition_img from '../img/opposition.png'
import { Context } from '../context/appContext';
import { Button, Input, Text } from '@nextui-org/react';


function Resistance() {

    const { store, actions } = useContext(Context);

    console.log(store.concept)

    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={opposition_img} />
            </div>
            <div className="inner">
                <div className="absolute top-[20%] left-[31%]">
                    <h1 className='text-black font-secondary text-8xl'><b>The Resistance</b></h1>
                </div>
                <div className="absolute top-[40%] left-[28%] w-[700px]">
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px]'>
                        <p className='text-black font-tertiary text-3xl' >The forces against the protagonist's desire.</p>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px] mt-10'>
                        <div className='flex text-white font-tertiary text-3xl'>
                            <Text className='mx-3 text-black' size={28}>{"Facing "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.antagonism}</Text>
                            <Text className='mx-3 text-black' size={28}>{"where "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.opposition}</Text>
                        </div>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px] mb-10'>
                        <div className='flex text-white font-tertiary text-3xl'>
                            <Text className='mx-3 text-black' size={28}>{" the protagonist understands that "}</Text>
                            <Text size={28} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.half}</Text>
                        </div>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[80px]'>
                        <Input onChange={() => actions.handleResistance} className="mt-4 w-[70%] mx-auto" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder="Opposition" />
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

export default TiltWrapper(Resistance, "Resistance");