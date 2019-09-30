let input = document.querySelector('input[type=text]');
let button = document.querySelector('input[type=submit]');
let ul = document.querySelector('ul');

ul.addEventListener('click', removeElement);
button.addEventListener('click', addContent);

function addContent(e) {
    e.preventDefault();
    // console.log(e);
    let ul = document.querySelector('#items');
    let li = document.createElement('li');
    li.className = "list-group-item";
    let item = document.createTextNode(`${input.value}`);
    let button = document.createElement('button');
    button.textContent = 'X';
    button.className = 'btn btn-danger btn-sm float-right delete';
    li.appendChild(item);
    li.appendChild(button);
    ul.appendChild(li);
}

function removeElement(e) {
    if(e.target.className == 'btn btn-danger btn-sm float-right delete') {
        // alert("x");
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
}