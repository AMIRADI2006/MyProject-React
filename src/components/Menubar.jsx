import { NavLink } from 'react-router-dom';

export default function Menubar() {
    return (
        <>
            <nav className="bg-black/40 backdrop-blur-md text-white min-w-[200px] h-screen hidden absolute top-0 left-0 z-50 p-10
                max-lg:block border-r border-gray-500/30 shadow-lg">
                <ul className="flex flex-col gap-10 max-xl:gap-5">
                    <li className="hover:text-blue-200 transition-colors duration-150 cursor-pointer">
                        <NavLink to={'/'}
                            className={({ isActive }) => isActive ? "text-blue-300 font-medium" : ""}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="hover:text-blue-200 transition-colors duration-150 cursor-pointer">
                        <NavLink to={''}>Find job</NavLink>
                    </li>
                    <li className="hover:text-blue-200 transition-colors duration-150 cursor-pointer">
                        <NavLink to={'/Company'}
                            className={({ isActive }) => isActive ? "text-blue-300 font-medium" : ""}
                        >
                            Company
                        </NavLink>
                    </li>
                    <li className="hover:text-blue-200 transition-colors duration-150 cursor-pointer">
                        <NavLink to={''}>Create CV</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
