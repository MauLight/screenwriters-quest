import { Input } from '@nextui-org/react';
import theme_img from '../img/theme.png'
import { TiltWrapper } from '../hoc/SectionWrapper';
import { useContext } from 'react';
import { Context } from '../context/appContext';

function Theme() {

    const { store, actions } = useContext(Context);
    const {
        theme,
    } = store.dramatic_basis

    //<Theme title={store.titles[3]} text={theme.def} image={theme_img} example={theme.example} onChange={(e) => actions.handleTheme(e.target.value)} />

    return (
        <div className='relative rounded-[30px] w-[100%] h-[750px] my-20'>

            <div className='rounded-[30px]  w-[100%] h-[750px] '>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={theme_img} />
            </div>
            <div className="inner">
                <div className="absolute top-[45%] left-[44%]">
                    <h1 className="text-white font-secondary text-6xl mb-5">{store.titles[3]}</h1>
                </div>
                <div className="absolute top-[58%] left-[33%] w-[640px]">
                    <p className="text-white font-tertiary text-3xl">{theme.def}</p>
                    <div className="pr-6">
                        <Input onChange={(e) => actions.handleTheme(e.target.value)} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={store.titles[3]} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TiltWrapper(Theme, "Theme");