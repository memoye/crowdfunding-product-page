import { getProjectContext } from '../../context/ProjectsContext'
import CustomButton from '../CustomButton/CustomButton'
import Figure from './Figure'
import './project.scss'

const RewardPack = ({ name, description, minimumPledge, remaining }) => {
    const { setSelectedReward, setModalOpen, setModalStep } = getProjectContext()

    function handleSelect() {
        setSelectedReward({ name, description, minimumPledge, remaining })
        setModalStep(2)
        setModalOpen(true)
    }

    return (
        <div className={ `rewardPack card ${remaining === 0 && 'fadeOut'}` }>
            <h3 className='rewardPack__title'>{ name } <span className='rewardPack__subtitle'>Pledge ${ minimumPledge && minimumPledge.toLocaleString() } or more</span></h3>
            <p className="rewardPack__description">{ description }</p>
            <div className='bottomContainer'>
                { remaining !== null && <Figure
                    value={ remaining }
                    description={ 'left' }
                    customStyle={ 'noLeftPadding' }
                /> }
                <CustomButton
                    disabled={ remaining === 0 }
                    onClick={ handleSelect }
                >
                    {
                        remaining !== 0 ?
                            'Select Reward' :
                            'Out of stock'
                    }
                </CustomButton>
            </div>
        </div>
    )
}
export default RewardPack