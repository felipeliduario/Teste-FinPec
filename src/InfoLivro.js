import React from 'react';

const InfoLivro= (props)=>{
    return(
        <div className='card-container'>
            <img src={props.capa} alt="" />
            <div className="desc">
                <h2>{props.titulo}</h2>
                <h3>Autor: {props.autor}</h3>
                <p>Publicação: {props.publicacao==='0000'? 'Não Disponivel':props.publicacao.substring(0,4)}</p>
            </div>
        </div>
    )
}
export default InfoLivro;