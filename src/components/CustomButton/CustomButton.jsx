import { FaCircle, FaCheck } from 'react-icons/fa'
import './customButton.scss'

// variations: default, switch

const CustomButton = ({ children, variation = 'default', disabled = false, done = false, customStyle, startIcon = <FaCircle />, endIcon, onClick }) => {
    return (
        <button
            className={ `customButton 
            ${variation === 'switch' && `switch ${done ? 'padRight' : 'padLeft'}`} 
            ${customStyle && customStyle}
            `
            }
            onClick={ onClick }
            disabled={ disabled }
        >
            { (variation === 'switch' && startIcon) &&
                (<span className={ `switch_icon ${done && 'doneState'}` }>
                    { done ? (<FaCheck color='#fff'
                        size={ 22 }
                        className='switchDone' />) : startIcon }
                </span>)
            }
            <div className={ `children ${done && 'doneColor'}` }>
                { children }{ (variation === 'switch' && done) && (children[children.length - 1] === 'e' ? 'd!' : 'ed!') }
            </div>
        </button>
    )
}
export default CustomButton