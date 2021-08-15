const sectionToDO = document.getElementById('sectionToDo');
const inputValue = document.getElementById('inputText');
const inputList = document.getElementById('list');
const myDIV = document.getElementById('myDIV');
const addBtn = document.getElementById('add');
const listItems = document.querySelector('list');


function addNode() {
    const newItem = document.createElement('Li');

    const textNode = document.createTextNode(inputValue.value);
    if (inputValue.value === '') return;

    newItem.appendChild(textNode);

    const list = document.getElementById('list');
    // const storedItems = localStorage.setItem('storedItems', textNode);
    list.insertBefore(newItem, list.childNodes[0]);
    inputValue.value = '';
    inputValue.focus();

}

const li = document.querySelector('ul');
li.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
