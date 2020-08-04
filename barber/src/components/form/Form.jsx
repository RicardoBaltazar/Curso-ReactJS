import React from 'react'
import './form.css'

import FormButton from '../form/buttonForm/FormButton'

export default function DivForm() {
    return (
        <>
            <div className='form'>
                <fieldset>
                    <legend>FALE CONOSCO</legend>

                    <label htmlFor="name">Nome *</label>
                    <input type="text" name='email'/>

                    <label htmlFor="email">Email *</label>
                    <input type="email" name="email" id=""/>

                    <label htmlFor="fone">Telefone</label>
                    <input type="text" name='fone'/>

                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="" cols="30" rows="5"></textarea>

                    <FormButton nameButton='ENVIAR' />
                </fieldset>
            </div>
        </>
    )
}