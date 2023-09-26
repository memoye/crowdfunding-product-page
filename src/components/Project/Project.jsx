import TitleSection from './TitleSection'
import './project.scss'
import { mastercraft } from '../../assets'
import StatsSection from './StatsSection'
import RewardPack from './RewardPack'
import { getProjectContext } from '../../context/ProjectsContext'

const Project = () => {

    const { state, dispatch, current } = getProjectContext()
    const project = state

    function handleSelect(name) {
        dispatch({ type: 'SELECT_REWARD', payload: name })
    }

    return (
        <div className="project">
            <TitleSection { ...project } />

            <StatsSection
                { ...project }
            />

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
                            .map((item, i) => {
                                // if (item.minimiumPledge !== 0) {
                                return (
                                    <RewardPack
                                        key={ i }
                                        id={ project.id }
                                        handleSelect={ () => handleSelect(item.name) }
                                        { ...item } />
                                )
                                // }
                            })
                    }
                </div>
            </div>
        </div>
    )
}
export default Project