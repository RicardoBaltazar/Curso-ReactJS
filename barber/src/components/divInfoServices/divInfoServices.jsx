import React from 'react'
import './divInfoServices.css'

import InfoService from './infoServices/InfoServices'


export default function DivInfoServices() {
    return (
        <>
            <div className='divInfoServices'>
                <InfoService title={'BARBA'} service={'BARBA COM RITUAL - R$ 75'} infoService={'Ritual de tratamento de pele com micro esfoliação e drenagem facial. Tolerância de 20min para o início do serviço.'} />
                <InfoService service={'BARBA TRADICIONAL - R$ 60'} infoService={'Realizada com navalha e toalha quente. Tolerância de 20min para o início do serviço.'} />
                <InfoService service={'BARBA TRADICIONAL COM PEZINHO - R$ 75'} infoService={'Realizada com navalha e toalha quente e "pezinho". Tolerância de 20min para o início do serviço.'} />
                <InfoService className='titleHair' title={'CABELO'} service={'CORTE + BARBA COM RITUAL - R$ 130'} infoService={'Corte e Barba com Ritual de tratamento de pele, micro esfoliação e drenagem facial. Tolerância de 20min para o início do serviço.'} />
                <InfoService service={'CORTE + BARBA TRADICIONAL - R$ 120'} infoService={'Corte e Barba com navalha e toalha quente. Tolerância de 20min para o início do serviço.'} />
                <InfoService service={'CORTE COM MÁQUINA (1 PENTE)'} infoService={'Corte com máquina e Barba com navalha e toalha quente. Tolerância de 20min para o início do serviço.'} />
            </div>
        </>
    )
}