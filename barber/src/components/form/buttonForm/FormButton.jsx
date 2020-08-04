import React from 'react'
import '../buttonForm/formButton.css'

export default function FormButton(props) {
    return (
        <button className='formButton'>
            {props.nameButton}
        </button>
    )
}