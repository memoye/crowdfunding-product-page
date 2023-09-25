import CustomButton from '../CustomButton/CustomButton'
import './project.scss'
import { useState } from 'react'
import { FaBookmark } from 'react-icons/fa'


const TitleCard = ({ title, description, projectLogo }) => {
    const [done, setDone] = useState(false)

    return (
        <section className='title card'>
            <img src={ projectLogo } alt="project__logo" className="title__logo" />
            <h1 className='title__title'>{ title }</h1>
            <p className='title__description'>{ description }</p>
            <div className='title__buttonsContainer'>
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