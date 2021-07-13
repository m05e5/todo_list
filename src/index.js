import _ from 'lodash';
import './style.css';
const todo_div = document.querySelector('.todo-list');
function component() {
  const element = document.createElement('div');

 // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}



document.body.appendChild(component());