const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

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
