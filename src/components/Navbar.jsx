import image from '../img/logo.26_nov.png'
import Hamburger from 'hamburger-react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import { Popover, Text, Button } from '@nextui-org/react';

const Nav = () => {

    const style = {
        width: '310px',
        paddingBottom: '10px',
    }

    return (
        <div className="flex items-center justify-between py-8 w-[100%] bg-white">
            <a href="/" className='pl-2 pt-2'>
                <img src={image} style={style} alt="logo" />
            </a>
            <nav className='opacity-100'>


                <section className="MOBILE-MENU flex ">
                    <div className="icons mx-5">
                        <ul className="DESKTOP-MENU lg:flex gap-5 pt-[10px]">
                            <li>
                                <a href="/">
                                    <i className="text-xl fa-solid fa-magnifying-glass"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/screenwriters.quest/">
                                    <i className="text-xl fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="text-xl fa-regular fa-user"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HAMBURGER-ICON">
                        <Popover>
                            <Popover.Trigger>
                                <Button className='p-0 m-1' auto flat>
                                    <Hamburger size={20} duration={0.8} />
                                </Button>
                            </Popover.Trigger>
                            <Popover.Content>
                                <ul className='px-5'>
                                    <li className="border-gray-400 my-8 uppercase">
                                        <a href="/dramatic">The Myth</a>
                                    </li>
                                    <li className="border-gray-400 my-8 uppercase">
                                        <a href="/dramatic2">Lesson 01</a>
                                    </li>
                                    <li className="border-gray-400 my-8 uppercase">
                                        <a href="/dramatic3">Lesson 02</a>
                                    </li>
                                    <li className="border-gray-400 my-8 uppercase">
                                        <a href="/dramatic4">Character Logline</a>
                                    </li>
                                    <li className="border-gray-400 my-8 uppercase">
                                        <a href="/dramatic5">Lesson 03</a>
                                    </li>
                                    <li className="border-gray-400 my-8 uppercase">
                                        <a href="/dramatic6">Lesson 04</a>
                                    </li>
                                    <li className="border-gray-400 my-8 uppercase">
                                        <a href="/dramatic7">Functional logline</a>
                                    </li>
                                </ul>
                            </Popover.Content>
                        </Popover>
                    </div>
                </section>
            </nav>

        </div>
    )
};

export default TiltWrapper(Nav, "Navbar");
