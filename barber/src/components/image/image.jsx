import React from 'react'
import './image.css'

import Button from '../button/Button'

const img = require('../../assets/Image.jpg')

export default function Image() {
    return (
        <>
            <header>
                <img src={img} alt="Imagem da Barbearia" className='img'/>
                <div className="title">
                    <p>Barbearia,</p>
                    <p>Cabelo</p>
                    <p>E Barba</p>
                    <Button />
                </div>
            </header>
        </>
    )
}