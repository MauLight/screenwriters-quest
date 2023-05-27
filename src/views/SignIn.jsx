import { useContext } from 'react';
import GoogleButton from 'react-google-button'
import Tilt from 'react-parallax-tilt';
import { Context } from '../context/appContext';

export default function SignIn() {

    const { actions } = useContext(Context)

    const handleSignIn = async () => {
        try {
            await actions.googleSignIn()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Tilt className='flex justify-center w-[500px] h-[500px] items-center mx-auto' tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                <div className='rounded-[30px] border border-black border-1 flex justify-center w-[500px] h-[500px] items-center mx-auto'>
                    <GoogleButton onClick={handleSignIn} />
                </div>
            </Tilt>
        </>
    )
}
