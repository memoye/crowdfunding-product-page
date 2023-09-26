import { useEffect, useState } from "react"
import Figure from "../Project/Figure"
import CustomButton from "../CustomButton/CustomButton"
import { getProjectContext } from "../../context/ProjectsContext"

const ModalRewardPacks = ({ name, description, minimumPledge, remaining }) => {
    const { selectedReward, setSelectedReward, dispatch } = getProjectContext()
    // const [selected, setSelected] = useState(false)
    const [userInput, setUserInput] = useState('')
    const [error, setError] = useState(false)

    function handleSelect() {

        if (selectedReward === name) {
            setSelectedReward('')
        } else {
            setSelectedReward(name)
        }
        // console.log(selectedReward)
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

    }

    // useEffect(() => {
    //     if (selectedReward === name) {
    //         setSelected(true)
    //     } else {
    //         setSelected(false)
    //     }
    //     console.log(selectedReward)
    // }, [])

    return (
        <div className={ `rewards ${remaining === 0 && 'fadeOut'}` } >

            <div className="rewardsTxt">

                <div className="rewardsTxt__titleContainer">
                    <button
                        onClick={ () => {
                            { remaining != 0 && handleSelect() }
                        } }
                        className={ `circle` }>{ selectedReward === name && <span></span> }</button>
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

                <p className="desc">{ description }</p>
            </div>
            <Figure
                row
                value={ remaining }
                description={ 'left' }
                customStyle={ 'figure mobile' }
            />

            {
                selectedReward === name && <div className="selected">
                    { <hr /> }
                    <div className="enterPledge">
                        <p>Enter your pledge</p>
                        <form onSubmit={ handleSubmit } className="form">
                            <div className="formField">
                                <span>$</span>
                                <input
                                    className={ `${error && 'inputError'}` }
                                    onBlur={ handleBlur }
                                    disabled={ remaining === 0 }
                                    value={ userInput }
                                    type="text"
                                    onChange={ handleChange }
                                />

                            </div>

                            <CustomButton
                                customStyle={ 'submit' }
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