import CustomButton from '../CustomButton/CustomButton'
import './project.scss'
import { useState } from 'react'
import { FaBookmark } from 'react-icons/fa'


const TitleCard = ({ title, description, projectLogo }) => {
    const [done, setDone] = useState(false)

    return (
        <section className='titleCard card'>
            <img src={ projectLogo } alt="project__logo" className="titleCard__logo" />
            <h1 className='titleCard__title'>{ title }</h1>
            <p className='titleCard__description'>{ description }</p>
            <div className='titleCard__buttonsContainer'>
                <CustomButton>Back this project</CustomButton>

                <CustomButton
                    variation={ 'switch' }
                    startIcon={ <FaBookmark /> }
                    onClick={ () => setDone(!done) }
                    done={ done }
                >
                    Bookmark
                </CustomButton>

            </div>
        </section>
    )
}
export default TitleCard