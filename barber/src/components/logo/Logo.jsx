import React from 'react'

const logo = require('../../assets/logo.png')

export default function Logo() {
    return (
        <div>
            <img src={logo} alt="logotipo"/>
        </div>
    )
}