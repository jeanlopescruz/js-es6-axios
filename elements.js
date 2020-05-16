const linkEl = document.createElement('a');
linkEl.setAttribute('href', 'https://pokeapi.co/');
linkEl.setAttribute('title', 'Site API Poké');
linkEl.setAttribute('alt', 'Clique redireciona para site da API Poke');
linkEl.style.color = 'white';

const textEl = document.createTextNode('Conhecer API Poké');
linkEl.appendChild(textEl);

const sectionEl = document.querySelector('#app');
sectionEl.appendChild(linkEl);
sectionEl.style.width = 500;
sectionEl.style.height = 200;
sectionEl.style.backgroundColor = '#4d0f0f';

const inputEl = document.getElementsByClassName('.keyboard');
//sectionEl.removeChild(inputEl);
