const ul = document.querySelector('.list-group');
const formAdd = document.querySelector('form.add');

const generateTemplate = todoTxt => {
    const newLi = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todoTxt}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    ul.innerHTML += newLi;
};

//add a new Todo
formAdd.addEventListener('submit', e => {
    e.preventDefault();

    const inputAdd = formAdd.querySelector('input#addTodo');
    const val = inputAdd.value.trim().toLowerCase();

    if (val.length) {
        generateTemplate(val);
    }

    inputAdd.value = '';
});

//delete a Todo
ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    
});

const formSearch = document.querySelector('form.search');
const inputSearch = formSearch.querySelector('input#searchTodo');

formSearch.addEventListener('keyup', e => { //event on key up
     
    Array.from(ul.children)
    .filter(todo => !todo.textContent.includes(inputSearch.value.toLowerCase()))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(ul.children)
    .filter(todo => todo.textContent.includes(inputSearch.value.toLowerCase()))
    .forEach(todo => todo.classList.remove('filtered'));
});

