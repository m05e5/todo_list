/*eslint-disable*/
import _ from 'lodash';
import {updateStatus} from './status.js';
import './style.css';
import { todo, load } from './data.js';
import { makeContainer, makeDrageable } from './dragDrop';
import {
  addActivity, antiShowAll, elimanateCompleteds, saveone, onfocus, offfocus, removeone,
} from './addEditErase.js';
/* eslint-enable */

let todolist = [
  {
    index: 0,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 1,
    description: 'clean my room',
    completed: false,
  },
  {
    index: 2,
    description: 'Complete todo list project',
    completed: false,
  },
];
if (localStorage.getItem('information') === null) {
  localStorage.setItem('information', JSON.stringify(todolist));
}
class TODOs {
  constructor() {
    this.toDoList = null;
  }

  setTodo(todolist) {
    this.todo = todolist;
  }

  getTodo() {
    return this.todo;
  }

  add(description, completed) {
    this.toDoList = this.toDoList.concat({ index: Date.now(), description, completed });
  }

  remove(id) {
    this.toDoList = this.toDoList.filter((todo) => todo.id !== Number(id));
  }
}
/* eslint-disable */
const todos = new TODOs();
/* eslint-enable */

const todoDiv = document.querySelector('.todos');
makeContainer(todoDiv);
const lunchTodoList = () => {
  todolist.forEach((todo) => {
    const li = document.createElement('li');
    makeDrageable(li);
    li.classList.add('todo');
    li.classList.add('draggable');
    li.id = todo.index;
    li.draggable = true;
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');
    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    liDiv.appendChild(checkbox);
    // create description
    const desc = document.createElement('p');
    desc.innerText = todo.description;
    liDiv.appendChild(desc);
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        desc.classList.add('line');
      } else {
        desc.classList.remove('line');
      }
    });
    li.appendChild(liDiv);
    // create 3 vertical dots
    const dots = document.createElement('i');
    dots.classList.add('fa');
    dots.classList.add('fa-ellipsis-v');
    li.appendChild(dots);
    todoDiv.appendChild(li);
  });
  const cbox = document.querySelectorAll('.checkbox');
  cbox.forEach((chbox) => {
    chbox.addEventListener('change', updateStatus);
  });
};

const todoInput = document.getElementById('todo-input');
todoInput.addEventListener('keydown', (e) => {

  if (e.key === 'Enter') {
    addActivity(todoInput.value);
    antiShowAll(todoDiv);
    const get = load();
    todos.setTodo(get);
    window.location.reload();
  }
}) 

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('information')) {
    todolist = JSON.parse(localStorage.getItem('information'));
  } else {
    localStorage.setItem(
      'information',
      JSON.stringify(todolist.sort((a, b) => +a.index - +b.index)),
    );
  }

  lunchTodoList(todolist.sort((a, b) => +a.index - +b.index));
});
