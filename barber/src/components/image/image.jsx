import React from 'react'
import './image.css'

import Button from '../button/Button'
import Logo from '../logo/Logo'

const img = require('../../assets/Image.jpg')

export default function Image() {
    return (
        <>
            <header>
                <img src={img} alt="Imagem da Barbearia" className='img'/>
                <div className="title">
                    <p>Respeito,</p>
                    <p>Família</p>
                    <p>E Tradição</p>
                    <Button nameButton='AGENDAR'/>
                </div>
            </header>
        </>
    )
}