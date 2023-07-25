var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    e.preventDefault()

    let urlForm = 'https://pokeapi.co/api/v2/pokemon/'

    urlForm = urlForm + this.nome.value
    urlForm = urlForm.toLocaleLowerCase()

    let info = document.getElementById("content")

    let imagem = document.getElementById("imagem-pokemon")

    let html = ''

    fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function(data){
        console.log(data)
        html = 'Nome: ' + maiuscula(data.name) + '<br>'
        html = html + 'Type: ' + maiuscula(data.types[0].type.name)
        imagem.innerHTML = '<img src="'+ data.sprites.front_default +'"><img src="'+
        data.sprites.back_default + '">'
        info.innerHTML = html
    }).catch(function(err){
        console.log(err)
        if(err == 'SyntaxError: Unexpected token \'N\', "Not Found" is not valid JSON'){
            html = 'Pokémon não encontrado 😢'
        } else{
            html = 'ERROR '+ err 
        }
        info.innerHTML = html
    })

    
});

function maiuscula (text) {
    return text[0].toUpperCase() + text.substr(1)
}


