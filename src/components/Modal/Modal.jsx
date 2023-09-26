import ModalDefault from './ModalDefault'
import './modal.scss'

const Modal = () => {


    return (
        <div className={ `backdrop` }
            onClick={ () => console.log('close modal') }
        >
            <ModalDefault />
        </div>
    )
}
export default Modal