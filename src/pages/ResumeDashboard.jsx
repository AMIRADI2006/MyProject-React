import Sidebar from "../components/Resume/Sidebar"


export default function ResumeDashboard() {
    return (
        <>
        <section className="flex min-h-screen bg-neutral-200 px-6 py-8">
            <Sidebar></Sidebar>
                <section>
                    <div className="">
                        <h2>My Resume</h2>
                        <p>Updating your information will offer you the most relevent content </p>
                    </div>
                    <div>
                        <div>
                            <input className="" type="text" placeholder="Search"/>
                            <img src="" alt="search" />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>

                        <div>
                            <img src="" alt="profile" />
                            <div>
                                <h4>AmirMohammad</h4>
                                <p>mamirmohammad@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </section>
            
        </section>
        </>
    )
}
