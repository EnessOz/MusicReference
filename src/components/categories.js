import React from 'react'

export const Categories = ({ href, text }) => {
    return (
        <div className='categories-container'>
            <a className='button-74 ' style={{width:"150px"}} href={href}>{text}</a>
        </div>
    )
}
