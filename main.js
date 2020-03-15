const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchField = document.querySelector('.search-input');

const createNewToDo = toDo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="fa fa-trash delete" aria-hidden="true"></i>
    </li>
 `;
  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const toDo = addForm.add.value.trim();
  if (toDo.length) {
    createNewToDo(toDo);
  }

  addForm.add.value = '';
});

//delete toDo
list.addEventListener('click', e => {
  if (Array.from(e.target.classList).includes('delete')) {
    e.target.parentElement.remove();
  }
});

//filter toDo
const filter = searchPhrase => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(searchPhrase))
    .map(item => item.classList.add('filtered'));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(searchPhrase))
    .map(item => item.classList.remove('filtered'));
};

searchField.addEventListener('keyup', () => {
  const searchPhrase = searchField.value.toLowerCase().trim();
  filter(searchPhrase);
});
