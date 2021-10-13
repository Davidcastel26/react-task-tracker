//rafce to import a new component with a return stament
// import React from 'react'
// impt to import a proptype 
import propTypes from "prop-types"

// ORIGINAL PROP
// const Header = (PROPS ) => {
// WE COULD USE THE DESTRUCTURE FROM THE PROPS 
//  <h1>{PROPS.TITLE}</h1>

const Header = ({title}) => {
    return(
        <header>
{/* in order to make an styles we need to use dooble curly brakes {{}} */}
            {/* <h1 style={{color:'red'}}>{title}</h1> */}
            {/* if we have an variable we just need to submit the varible name and using one brace {} instead of two */}
            <h1 style={headingStyle}>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
//if we do not want to have the styles in a line we can create a varible as we did below
const headingStyle = {
    color:'red',
    backgroundColor: 'black'
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header