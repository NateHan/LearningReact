import PropTypes from 'prop-types'

const Header = ({name}) => {
    return (
        <header>
            <h1 style={headingStyle}>
                Task Tracker: {name}
                </h1>
        </header>
    )
}

Header.defaultProps = {
    name: 'Dude Guy',
}

Header.propTypes = { 
    name : PropTypes.string.isRequired
}

// how to do CSS in JS, pop into any html block above as style={headingStyle} 
const headingStyle = {
    color:'green', 
    backgroundColor:'blue'
}

export default Header
