import React, { useState } from 'react'
import css from './Card.module.css'

export const Card = ({data}) => {

    const [result, setResult] = useState()

    const Changing = (e) => {
        let a = e.target.parentNode.children[0].innerText
        setResult(a)
    }
    return (
        <>
        <div className={css.box}>
        <h1>{result}</h1>
        </div>
        <div className={css.container}>
        <h2>{data.title}</h2>
        <img src={data.img} alt=''onClick={Changing}></img>
        <h2>{data.price}</h2>
        </div>
        </>
    )
}


   
