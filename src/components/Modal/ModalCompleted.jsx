import { check } from "../../assets"
import { getProjectContext } from "../../context/ProjectsContext"
import CustomButton from "../CustomButton/CustomButton"

const ModalCompleted = () => {
    const { setModalOpen, setModalStep } = getProjectContext()

    function handleClick() {
        setModalOpen(false)
        setModalStep(1)
    }

    return (
        <div className={ `modal completed` }>
            <img src={ check } alt="completed" />
            <h4>Thank you for your support!</h4>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <CustomButton
                onClick={ handleClick }
            >
                Got it!
            </CustomButton>
        </div>
    )
}
export default ModalCompleted