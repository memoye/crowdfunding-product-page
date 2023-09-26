import { getProjectContext } from '../../context/ProjectsContext'
import ModalCompleted from './ModalCompleted'
import ModalDefault from './ModalDefault'
import './modal.scss'

const Modal = () => {
    const { setModalOpen, modalStep, setModalStep, setSelected } = getProjectContext()

    function closeModal() {
        setModalOpen(false)
        setModalStep(1)
        setSelected('')
    }

    return (
        <div className={ `backdrop` }
            onClick={ () => setModalOpen(false) }
        >
            { modalStep === 1 && <ModalDefault /> }
            { modalStep === 2 && <ModalCompleted /> }
        </div>
    )
}
export default Modal