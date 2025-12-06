export default function Sidebar() {
    return (
        <>
            <aside className="w-64 bg-white shadow-md p-6 rounded-[14px]">

                <div className="flex justify-center gap-1 ">
                    <img className="size-12" src="./images/Pages/resume/logo.png" alt="" />
                    <div>
                        <h2 className="text-lg font-bold">Joblin</h2>
                        <p className="text-xs -mt-0.5">Dashboard</p>
                    </div>
                </div>
                
                <nav className="max-lg:hidden   ">
                    <ul className="flex gap-10 max-xl:gap-5">
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
                            <NavLink to={'/resume'}>Create CV</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}