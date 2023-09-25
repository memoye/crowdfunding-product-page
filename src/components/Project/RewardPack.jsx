import CustomButton from '../CustomButton/CustomButton'
import Figure from './Figure'
import './project.scss'

const RewardPack = ({ name, description, minimumPledge, remaining }) => {
    return (
        <div className={ `rewardPack card ${remaining <= 0 && 'fadeOut'}` }>
            <h3 className='rewardPack__title'>{ name } <span className='rewardPack__subtitle'>Pledge ${ minimumPledge.toLocaleString() } or more</span></h3>
            <p className="rewardPack__description">{ description }</p>
            <div className='bottomContainer'>
                <Figure
                    value={ remaining }
                    description={ 'left' }
                    customStyle={ 'noLeftPadding' }
                />
                <CustomButton
                    disabled={ !remaining }
                >
                    {
                        remaining ?
                            'Select Reward' :
                            'Out of stock'
                    }
                </CustomButton>
            </div>
        </div>
    )
}
export default RewardPack