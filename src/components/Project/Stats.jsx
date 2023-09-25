import Figure from './Figure'
import './project.scss'


const Stats = ({ totalAmt, targetAmt, totalBackers, daysLeft }) => {
    return (
        <section className='stats card'>
            <div className='stats__figures'>
                <Figure
                    currency={ '$' }
                    value={ totalAmt }
                    description={ `of $${targetAmt.toLocaleString()} backed` }
                    column
                    customStyle={ 'noLeftPadding' }
                />

                <Figure
                    value={ totalBackers }
                    description={ 'total backers' }
                    column
                />

                <Figure
                    value={ daysLeft }
                    description={ 'days left' }
                    column
                />
            </div>

            <progress className='progressBar' value={ totalAmt } max={ targetAmt }></progress>
        </section>
    )
}
export default Stats