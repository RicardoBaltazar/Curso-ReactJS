import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <span>{props.span}</span>
            <p>{props.firstInfo}</p>
            <p>{props.secondInfo}</p>
        </div>
    )
}