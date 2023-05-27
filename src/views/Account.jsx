import { Text } from '@nextui-org/react'
import { UserAuth } from '../context/authContext'

export default function Account() {

    const { user } = UserAuth()

    return (
        <div className='w-[700px] h-[400px] flex justify-center items-center'>
            <Text h1 className='font-primary mx-auto' size={50} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} >{user.displayName}</Text>
        </div>
    )
}
