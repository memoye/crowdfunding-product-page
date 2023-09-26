import { getProjectContext } from '../../context/ProjectsContext'
import ModalCompleted from './ModalCompleted'
import ModalDefault from './ModalDefault'
import ModalRewardPacks from './ModalRewardPacks'
import './modal.scss'

const Modal = () => {
    const { setModalOpen, modalStep, setModalStep, setSelectedReward, selectedReward } = getProjectContext()

    function closeModal() {
        setModalOpen(false)
        setModalStep(1)
        setSelectedReward('')
    }

    return (
        <div className={ `backdrop` }
            onClick={ closeModal }
        >
            { modalStep === 1 && <ModalDefault /> }

            {
                modalStep === 2 && (
                    <div className="modal"
                        onClick={ (e) => {
                            e.stopPropagation()
                        } }
                    >
                        <ModalRewardPacks
                            variation='notDefault'
                            { ...selectedReward }
                        />
                    </div>
                )
            }

            { modalStep === 3 && <ModalCompleted /> }
        </div>
    )
}
export default Modal