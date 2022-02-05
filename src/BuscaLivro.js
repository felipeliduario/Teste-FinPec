import React from 'react';

const BuscaLivro= (props)=>{
    return(
        <div className="BuscaLivro">
       <form onSubmit={props.retornaLivroApi} action="">
           <input onChange={props.atualizaBusca} onInput={props.handleInput} type="text"/>
           <button type="submit">Pesquisar</button>
           <select defaultValue="ordenar" onChange={props.changeOrdenacao}>
               <option value="ordenar">Ordenar</option>
               <option value="az">A - Z </option>
               <option value="za">Z - A</option>
               <option value="novo">Mais Recente </option>
               <option value="velho">Mais Antigo</option>
           </select>
       </form>
           </div>
    )
}
export default BuscaLivro;