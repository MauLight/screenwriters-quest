import { useContext } from 'react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import objective_img from '../img/objective.png'
import { Context } from '../context/appContext';
import { Button, Input, Text } from '@nextui-org/react';


function Objective() {

    const { store, actions } = useContext(Context);

    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={objective_img} />
            </div>
            <div className="inner">
                <div className="absolute top-[20%] left-[31%]">
                    <h1 className='text-black font-secondary text-8xl'><b>The Objective</b></h1>
                </div>
                <div className="absolute top-[40%] left-[28%] w-[700px]">
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px]'>
                        <p className='text-black font-tertiary text-3xl' >The protagonist's path of change and desire.</p>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px]'>
                        <Text size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.rev}</Text>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px]'>
                        <Text size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.want}</Text>
                        <Text className='mx-3' size={40}>VS</Text>
                        <Text size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.need}</Text>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[50px]'>
                        <Text size={30} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.flaw}</Text>
                    </div>
                    <div className='flex text-black justify-center font-tertiary text-3xl pl-[80px]'>
                        <Input onChange={() => actions.handleObjective} className="mt-4 w-[70%] mx-auto" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder="The Objective" />
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

export default TiltWrapper(Objective, "Objective");