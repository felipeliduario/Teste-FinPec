import React,{Component} from 'react';
import BuscaLivro from './BuscaLivro';
import ListaLivros from './ListaLivros'
import request from 'superagent'

class Livros extends Component{
    constructor(props){
        super(props);
        this.state={
            livro:[],
            campoBusca:'',
            ordenacao:''
        }
    }

    changeOrdenacao = (e) =>{
        this.setState({ ordenacao: e.target.value })
    }

    retornaLivroApi = (e) => {
        e.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.campoBusca})
        .then((data)=>{
            console.log(data);
            const verificaCamposApi=this.verificaCamposApi(data);
            this.setState({ livro: verificaCamposApi})
        })
    }

    atualizaBusca = (e) => {
        this.setState({ campoBusca: e.target.value })
    }

     handleInput = (e) => {
        var ss = e.target.selectionStart;
        var se = e.target.selectionEnd;
        e.target.value = e.target.value.toUpperCase();
        e.target.selectionStart = ss;
        e.target.selectionEnd = se;
     }

    verificaCamposApi = (data) => {
        const verificarCamposApi=data.body.items.map((livros) =>{
            if(livros.volumeInfo.hasOwnProperty('publishedDate')===false){
                livros.volumeInfo['publishedDate']='0000';
            }
            else if(livros.volumeInfo.hasOwnProperty('imageLinks')===false){
                livros.volumeInfo['imageLinks']={thumbnail:'https://bitsofco.de/content/images/2018/12/broken-1.png'};
            }
            return livros;
        })
        return verificarCamposApi;
    }

    render(){
        const ordenaLivros = this.state.livro.sort((a, b) => {
            if(this.state.ordenacao ==='novo' ){
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));
            }
            else if(this.state.ordenacao ==='velho' ){
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4));
            }
            else if(this.state.ordenacao === 'za' && b.volumeInfo.title < a.volumeInfo.title ){
                return -1;
            }
            else if(this.state.ordenacao === 'az'  && b.volumeInfo.title > a.volumeInfo.title ){
                return -1;
            }
        })
       return(
           <div className="Livros">
           <BuscaLivro handleInput={this.handleInput} retornaLivroApi={this.retornaLivroApi} atualizaBusca={this.atualizaBusca} changeOrdenacao={this.changeOrdenacao}/>
           <ListaLivros livroApi={ordenaLivros} />
           </div>
       );
    }
}
export default Livros;