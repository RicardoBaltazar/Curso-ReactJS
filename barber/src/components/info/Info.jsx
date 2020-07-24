import React from 'react'
import './info.css'

import Card from '../cards/Card'

export default function Info() {
    return (
        <>
            <div className='address'>
                <Card span={'ENDEREÇO'} firstInfo={'Rua Primeiro, 1234'} secondInfo={'Porto Alegre'} />
                <Card span={'ATENDIMENTO'} firstInfo={'Seg. a Sex. 10h às 21h'} secondInfo={'Sab. 10h às 16h'} />
                <Card span={'CONTATO'} firstInfo={'@barbeariaLorem'} secondInfo={'51 3333-0000'} />
            </div>
        </>

    )
}