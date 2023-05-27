import { useContext } from 'react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import myth_img from '../img/myth.png'
import { Context } from '../context/appContext';
import { Button, Input, Text } from '@nextui-org/react';


function Myth() {

    const { store, actions } = useContext(Context);

    console.log(store.concept)

    const { concept_idea,
        community_value,
        myth,
        theme,
        truth,
        contra_positive,
        lie,
        flaw,
        want,
        need,
        self_revelation,
        fall_into_lie
    } = store.dramatic_basis

    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={myth_img} />
            </div>
            <div className="inner">
                <div className="absolute top-[20%] left-[44%]">
                    <h1 className='text-black font-secondary text-8xl'><b>{store.titles[2]}</b></h1>
                </div>
                <div className="absolute top-[40%] left-[31%] w-[700px]">
                    <p className='text-black font-tertiary text-3xl' >{myth.def}</p>
                    <div className='flex text-black font-tertiary text-3xl pl-[50px]'>
                        <Text size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.concept}</Text>
                        <Text className='mx-3' size={40}>+</Text>
                        <Text size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.value}</Text>
                    </div>
                    <Input onChange={() => actions.handleMyth} className="mt-4 w-[90%] pl-[60px]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={store.titles[2]} />
                </div>
                <div className="absolute top-[77%] left-[46%] w-[700px]">
                    <Button className='px-5' shadow ghost rounded size="lg" color="gradient" auto>
                        <p className='text-black font-tertiary text-2xl' >Save</p>
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default TiltWrapper(Myth, "Myth");