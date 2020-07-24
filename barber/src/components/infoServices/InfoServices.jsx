import React from 'react'


export default function InfoServices(props) {
    return (
        <div className='infoServices'>
            <h3>{props.title}</h3>
            <p>{props.service}</p>
            <p>{props.infoService}</p>

        </div>
    )
}