import Tilt from 'react-parallax-tilt';
import StarsCanvas from '../components/canvas/stars';

export const TiltWrapper = (Component, idName, number) =>
    function HOC() {
        return (
            <section
                className="max-w-full mx-auto relative z-0 px-20"
                id={idName}
            >
                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                    <Component number={number} />
                </Tilt>
            </section>
        );
    };

export const DramaticWrapper = (Component, IdName) =>
    function Dramatic_HOC() {
        return (
            <section className='rounded-[30px] w-[100%] max-w-full mx-auto relative z-0 px-20 my-20 bg-black' id={IdName}>
                <Component />
                <StarsCanvas />
            </section>
        )
    }


