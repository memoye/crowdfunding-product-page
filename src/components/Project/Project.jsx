import TitleCard from './TitleCard'
import './project.scss'
import { mastercraft } from '../../assets'
import Stats from './Stats'
import AboutSection from './AboutSection'

const Project = () => {

    const project = {
        title: 'Mastercraft Bamboo Monitor Riser',
        description: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
        projectLogo: mastercraft,
        stats: {
            totalAmt: 89914,
            targetAmt: 100000,
            totalBackers: 5007,
            daysLeft: 56
        }
    }

    return (
        <div className="project">
            <TitleCard { ...project } />

            <Stats { ...project.stats } />

            <AboutSection />
        </div>
    )
}
export default Project