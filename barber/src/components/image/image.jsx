import React from 'react'
import './image.css'

const img = require('../../assets/Image.jpg')

export default function Image() {
    return (
        <>
            <header>
                <img src={img} alt="Imagem da Barbearia" className='img'/>
            </header>
        </>
    )
}