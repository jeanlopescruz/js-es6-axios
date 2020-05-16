var httpRequest;
function fazerRequisicao(url,destino){//url não esta sendo usada
    document.getElementById(destino).innerHTML = "<center><img src='loader.gif'></center>";
    httpRequest = new XMLHttpRequest();
    if(!httpRequest){
        alert("Erro HTTP REQUEST");
        return false;
    }
    httpRequest.onreadystatechange = situacaoRequisicao;
    httpRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/');
    httpRequest.send();
}
function situacaoRequisicao(){
    if(httpRequest.readyState == 4){
        if(httpRequest.status == 200){
            var jsonObj = JSON.parse(httpRequest.responseText);
            document.getElementById('div_conteudo').innerHTML = jsonObj.results[0].name; //retorna apenas o elemento 0 do array
        }
    }
}