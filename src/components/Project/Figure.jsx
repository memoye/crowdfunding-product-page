const Figure = ({ value = 0, currency, description, column, customStyle }) => {
    return (
        <div className={ `figure ${column ? 'column' : 'row'} ${customStyle && customStyle}` }>
            <div className="figure__value">{ currency && currency }{ value?.toLocaleString() }</div>
            { (value || value === 0) && <p className="figure__description">{ description }</p> }
        </div>
    )
}
export default Figure