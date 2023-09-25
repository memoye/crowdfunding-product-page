import TitleCard from './TitleCard'
import './project.scss'
import { mastercraft } from '../../assets'
import StatsSection from './StatsSection'
import RewardPack from './RewardPack'

const Project = () => {

    const project = {
        title: 'Mastercraft Bamboo Monitor Riser',
        description: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
        projectLogo: mastercraft,
        about: ` The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
        to allow notepads, pens, and USB sticks to be stored under the stand.`,
        stats: {
            totalAmt: 89914,
            targetAmt: 100000,
            totalBackers: 5007,
            daysLeft: 56
        },

        rewardPacks: [
            {
                name: 'Bamboo Stand',
                description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.`,
                minimumPledge: 25,
                remaining: 101
            },
            {
                name: 'Black Edition Stand',
                description: `You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.`,
                minimumPledge: 75,
                remaining: 64
            },
            {
                name: 'Mahogany Special Edition',
                description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.`,
                minimumPledge: 200,
                remaining: 0
            }
        ]
    }

    return (
        <div className="project">
            <TitleCard { ...project } />

            <StatsSection { ...project.stats } />

            <div className='about card'>
                <h2>About this project</h2>
                <p>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                    <br />
                    <br />
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>

                <div className='rewards'>
                    {
                        project.rewardPacks
                            .map((item, i) => (
                                <RewardPack
                                    key={ i }
                                    { ...item } />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Project