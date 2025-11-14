import Header from '../components/header/Header'
import PopularCategory from '../components/main/Popular Category/Popular Category'
import NewestJobs from '../components/main/Newest Jobs/Newest Jobs'
import StepstoYour from '../components/main/Steps to Your'
import TopCompanies from '../components/main/Top companies'
import OurAchievements from '../components/main/Our Achievements'
import OurBlog from '../components/main/Our Blog'
import Baner from '../components/main/baner'
import Footer from '../components/Footer'

export default function Home() {

    return (
        <>
            <Header/>
            <main >
                <PopularCategory/>
                <NewestJobs />
                <StepstoYour />
                <TopCompanies/>
                <OurAchievements/>
                <OurBlog/>
                <Baner/>
            </main>
            <Footer/>
        </>
    )
}