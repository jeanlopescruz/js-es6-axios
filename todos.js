var listEl = document.querySelector('#app ul');
var inputEl = document.querySelector('#app input');
var buttonEl = document.querySelector('#app button');

var arrayTodos = [
    'Peaky Blinders',
    'Rick and Morty',
    'Prison Break',
    'Blindspot'
];

function renderTodos(){
    listEl.innerHTML = '';
    for (item of arrayTodos){
        var itemEl = document.createElement('li');
        var itemText = document.createTextNode(item);

        var linkEl = document.createElement('button');
        linkEl.setAttribute('href','#');

        var pos = arrayTodos.indexOf(item);
        linkEl.setAttribute('onclick','removeTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir série');
        linkEl.appendChild(linkText);

        itemEl.appendChild(itemText);
        itemEl.appendChild(linkEl);

        listEl.appendChild(itemEl);
    }
}


function addTodo(){
    var itemText = inputEl.value;
    arrayTodos.push(itemText);
    inputEl.value = '';
    renderTodos();
}
buttonEl.onclick = addTodo;

function removeTodo(pos){
    arrayTodos.splice(pos,1);
    renderTodos();
}

renderTodos(); 