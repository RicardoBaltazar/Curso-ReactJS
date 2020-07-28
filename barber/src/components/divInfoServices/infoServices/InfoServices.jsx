import React from 'react'
import './infoServices.css'


export default function InfoServices(props) {
    return (
        <div className='infoServices'>
            <h3>{props.title}</h3>
            <p className='fisrtP'>{props.service}</p>
            <p>{props.infoService}</p>
        </div>
    )
}