import Figure from './Figure'
import './project.scss'


const StatsSection = (props) => {

    const { totalAmt, targetAmt, totalBackers, daysLeft } = props.stats

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
export default StatsSection