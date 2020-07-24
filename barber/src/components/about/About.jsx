import React from 'react'

import History from '../history/History'
import InfoService from '../infoServices/InfoServices'

export default function About(){
    return (
        <div className='about'>
            <History />
            <InfoService title={'BARBA'} service={'BARBA COM RITUAL - R$ 75'} infoService={'Ritual de tratamento de pele com micro esfoliação e drenagem facial. Tolerância de 20min para o início do serviço.'}/>
        </div>
    )
}