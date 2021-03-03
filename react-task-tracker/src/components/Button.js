import React from 'react'

const Button = ({color, text}) => {
    const onClick = () => {
        console.log('Boop!')
    }
    
    return (
    <button 
        onClick={onClick} 
        style={{backgroundColor: color}} 
        className='btn'
        >
            {text}
    </button>
    )
}

export default Button
