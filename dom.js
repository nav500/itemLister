let input = document.querySelector('input[type=text]');
let button = document.querySelector('input[type=submit]');

button.addEventListener('click', addContent);

function addContent(e) {
    e.preventDefault();
    // console.log(e);
    let ul = document.querySelector('#items');
    let li = document.createElement('li');
    li.className = "list-group-item";
    let item = document.createTextNode(`${input.value}`);
    li.appendChild(item);
    ul.appendChild(li);
}