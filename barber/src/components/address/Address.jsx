import React from 'react'
import './address.css'

import Card from '../cards/Card'

export default function Address() {
    return (
        <>
            <div className='address'>
                <Card span={'ENDEREÇO'} firstInfo={'Rua Primeiro, 1234'} secondInfo={'Porto Alegre'}/>
                <Card span={'ATENDIMENTO'} firstInfo={'Seg. a Sex. 10h às 21h'} secondInfo={'Sab. 10h às 16h'}/>
                <Card span={'CONTATO'} firstInfo={'@barbearilorem'} secondInfo={'51 999999999'}/>
            </div>
        </>

    )
}