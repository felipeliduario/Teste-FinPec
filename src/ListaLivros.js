import React from 'react';
import InfoLivro from './InfoLivro'

const ListaLivros= (props)=>{
    return(
        <div className='list'>
         {
            props.livroApi.map((livroApi,i) => {
               return <InfoLivro 
               key={i}
               capa={livroApi.volumeInfo.imageLinks.thumbnail}
               titulo={livroApi.volumeInfo.title}
               autor={livroApi.volumeInfo.authors}
               publicacao={livroApi.volumeInfo.publishedDate}
               />
            })
         }  
        </div>
        
    )
}
export default ListaLivros;