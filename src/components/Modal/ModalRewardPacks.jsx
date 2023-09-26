import Figure from "../Project/Figure"

const ModalRewardPacks = ({ name, description, minimumPledge, remaining }) => {
    return (
        <div className={ `rewards ${remaining === 0 && 'fadeOut'}` } >

            <div className="rewardsTxt">

                <div className="rewardsTxt__titleContainer">
                    <button className={ `circle` }></button>
                    <h3 className="rewardsTxt__title">{ name } { minimumPledge > 0 && <span>Pledge ${ minimumPledge } or more</span> } </h3>
                    <div>
                        <Figure
                            row
                            value={ remaining }
                            description={ 'left' }
                            customStyle={ 'figure desktop' }
                        />
                    </div>
                </div>

                <p className="desc">{ description }</p>
            </div>
            <Figure
                row
                value={ remaining }
                description={ 'left' }
                customStyle={ 'figure mobile' }
            />
        </div>
    )
}
export default ModalRewardPacks