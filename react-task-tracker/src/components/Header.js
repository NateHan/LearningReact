import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header>
            <h1 className='header'>
                Task Tracker: {title}
            </h1>
        <Button color='green' text='click me' /> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Trackerzz',
}

Header.propTypes = { 
    title : PropTypes.string.isRequired
}

// how to do CSS in JS, pop into any html block above as style={headingStyle} 
// const headingStyle = {
//     color:'green', 
//     backgroundColor:'blue'
// }

export default Header
