import { NavLink } from 'react-router-dom';


export default function Navbar() {

    
    return (
        <>
            <nav className="">
                <ul className="flex gap-10">
                    <li className="hover:text-blue-600 transition-colors duration-150 cursor-pointer">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-600 font-medium" : ""}
                        >Home</NavLink>
                    </li>
                    <li className="hover:text-blue-600 transition-colors duration-150 cursor-pointer">
                        <NavLink to={''}>Find job</NavLink>
                    </li>
                    <li className="hover:text-blue-600 transition-colors duration-150 cursor-pointer">
                        <NavLink to={'/Company'} className={({ isActive }) => isActive ? "text-blue-600 font-medium" : ""}
                        >Company</NavLink>
                    </li>
                    <li className="hover:text-blue-600 transition-colors duration-150 cursor-pointer">
                        <NavLink to={''}>Create CV</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}