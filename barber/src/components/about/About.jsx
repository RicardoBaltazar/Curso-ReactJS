import React from 'react'
import './about.css'

import History from '../history/History'
import DivInfoServices from '../divInfoServices/divInfoServices'

export default function About(){
    return (
        <div className='about'>
            <History />
            <DivInfoServices/> 
        </div>
    )
}   