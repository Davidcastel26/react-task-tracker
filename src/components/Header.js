//rafce to import a new component with a return stament
// import React from 'react'
// impt to import a proptype 
import propTypes from "prop-types"
import { useLocation } from "react-router-dom"
import Button from "./Button"

// ORIGINAL PROP
// const Header = (PROPS ) => {
// WE COULD USE THE DESTRUCTURE FROM THE PROPS 
//  <h1>{PROPS.TITLE}</h1>

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return(
        <header className='header'>
{/* in order to make an styles we need to use  dooble curly brakes {{}} */}
            {/* <h1 style={{color:'red'}}>{title}</h1> */}
{/* if we have an variable we just need to submit the varible name and using one brace {} instead of two */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1> {title} </h1>
            {location.pathname === '/' && ( <Button 
                color={showAdd ? 'red' :'green'} 
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            /> )} 
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
//if we do not want to have the styles in a line we can create a varible as we did below
//CSS
// const headingStyle = {
//     color:'red',
//     backgroundColor: 'black'
// }
//-=-----------------------------------------------------------------------------------


Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header