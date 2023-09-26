import { HiX } from 'react-icons/hi'
import { getProjectContext } from '../../context/ProjectsContext'
import ModalRewardPacks from './ModalRewardPacks'
const ModalDefault = () => {

    const { state: project } = getProjectContext()

    return (
        <div className={ `modal` } onClick={ (e) => {
            e.stopPropagation()
            console.log('modal')
        } }>
            <HiX className='close'
                onClick={ (e) => {
                    e.stopPropagation()
                    console.log('close modal')
                } }
            />
            <h2>Back this project</h2>
            <p>{ project.modalDesc }</p>

            <div className="rewardsContainer">
                {
                    project.rewardPacks
                        .map((item, i) => (<ModalRewardPacks
                            key={ i }
                            { ...item }
                        />))
                }
            </div>
        </div>
    )
}
export default ModalDefault