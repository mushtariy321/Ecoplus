import React from 'react';

import image from './assets/eco.png';

const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4 flex justify-between items-center">
            <div>
                <img
                    src={image}
                    alt="Navbar Logo"
                    className='w-[52px]'
                />
            </div>
            <div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="/profile"
                                className="text-white hover:text-gray-400 transition duration-300"
                            >
                                HomePage
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.seadocsociety.org/what-is-ecosystem-health#:~:text=A%20healthy%20ecosystem%20is%20one,to%20withstand%20change%20and%20stressors."
                                className="text-white hover:text-gray-400 transition duration-300"
                            >
                                AboutPage
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
