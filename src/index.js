import _ from 'lodash';
import './style.css';
const todo_div = document.querySelector('.todo-list');
function component() {
  const element = document.createElement('div');

 // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

const lunchTodoList = () => {
  const headSection = document.createElement('div');
  headSection.classList.add('head-section');
  const headTitle = document.createElement('p');
  headTitle.classList.add('head-title');
  headTitle.innerText = `Today's To Do`;
  headSection.appendChild(headTitle);
  const headIcon = document.createElement('img');
  headIcon.classList.add('head-img');
  headIcon.src = '../assets/reset.png';
  headIcon.alt = 'reload';
  headIcon.id = 'headIcon';
  headSection.appendChild(headIcon);
  todo_div.appendChild(headSection);


}

lunchTodoList();

document.body.appendChild(component());