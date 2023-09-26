import { HiX } from 'react-icons/hi'
import { getProjectContext } from '../../context/ProjectsContext'
import ModalRewardPacks from './ModalRewardPacks'


const ModalDefault = () => {

    const { state: project, setModalOpen } = getProjectContext()



    return (
        <div className={ `modal` } onClick={ (e) => {
            e.stopPropagation()
        } }>
            <HiX className='close'
                title='Close'
                onClick={ (e) => {
                    e.stopPropagation()
                    setModalOpen(false)
                } }
            />
            <h2>Back this project</h2>
            <p>{ project.modalDesc }</p>

            <div className="rewardsContainer">
                {
                    project.rewardPacks
                        .map((item, i) => (
                            <ModalRewardPacks
                                key={ i }
                                variation='default'
                                { ...item }
                            />))
                }
            </div>

        </div>
    )
}
export default ModalDefault