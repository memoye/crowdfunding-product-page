import { useEffect, useState } from "react"
import Figure from "../Project/Figure"
import CustomButton from "../CustomButton/CustomButton"
import { getProjectContext } from "../../context/ProjectsContext"

const ModalRewardPacks = ({ name, description, minimumPledge, remaining, variation = 'default' }) => {
    const { selectedReward, setSelectedReward, setModalStep, dispatch } = getProjectContext()
    // const [selected, setSelected] = useState(false)
    const [userInput, setUserInput] = useState('')
    const [error, setError] = useState(false)

    function handleSelect() {
        if (selectedReward?.name === name) {
            setSelectedReward(null)
        } else {
            setSelectedReward({ name, description, minimumPledge, remaining })
        }
    }

    function handleChange(e) {
        if (!isNaN(Number(e.target.value))) {
            setError(false)
            setUserInput(e.target.value)
        } else {
            setError(true)
        }
        if (Number(e.target.value) < minimumPledge) {
            setError(true)
        }
    }

    function handleBlur(e) {
        if (Number(e.target.value) >= minimumPledge || e.target.value === '') {
            setError(false)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (userInput >= minimumPledge) {
            dispatch({ type: 'BACK_PROJECT', payload: { name, amount: Number(userInput) } })
            setModalStep(3)
        } else {
            setError(true)
        }
    }

    return (
        <div className={ `rewards ${remaining === 0 && 'fadeOut'}` } >

            <div className="rewardsTxt">

                <div className="rewardsTxt__titleContainer">
                    { variation === 'default' && (
                        <button
                            onClick={ () => {
                                { remaining != 0 && handleSelect() }
                            } }
                            className={ `circle` }>
                            { selectedReward?.name === name && <span></span> }
                        </button>)
                    }
                    <h3
                        onClick={ () => {
                            { remaining != 0 && handleSelect() }
                        } }
                        className="rewardsTxt__title">{ name } { minimumPledge > 0 && <span className={ `${error && 'indicateError'}` }>Pledge ${ minimumPledge } or more</span> } </h3>
                    <div>
                        <Figure
                            row
                            value={ remaining }
                            description={ 'left' }
                            customStyle={ 'figure desktop' }
                        />
                    </div>
                </div>

                { variation === 'default' && <p className="desc">{ description }</p> }
            </div>
            <Figure
                row
                value={ remaining }
                description={ 'left' }
                customStyle={ 'figure mobile' }
            />

            {
                selectedReward?.name === name && <div className="selected">
                    { <hr /> }
                    <div className="enterPledge">
                        { minimumPledge !== 0 && <p>Enter your pledge</p> }
                        <form onSubmit={ handleSubmit } className="form">
                            { minimumPledge !== 0 && (<div className="formField">
                                <span>$</span>
                                <input
                                    inputMode="numeric"
                                    className={ `${error && 'inputError'}` }
                                    onBlur={ handleBlur }
                                    disabled={ remaining === 0 }
                                    value={ userInput }
                                    type="text"
                                    onChange={ handleChange }
                                />

                            </div>) }

                            <CustomButton
                                customStyle={ `submit` }
                                disabled={ remaining === 0 || error }
                            >Continue</CustomButton>
                        </form>
                    </div>
                </div>
            }
        </div >
    )
}
export default ModalRewardPacks