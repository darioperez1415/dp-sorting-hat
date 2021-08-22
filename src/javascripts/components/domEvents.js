import showForm from './showForm';
import { addStudentToArray, expelStudent } from '../helpers/data/studentData';

const domEvents = () => {
  document.querySelector('#start-sorting').addEventListener('click', showForm);
  document
    .querySelector('#sorting-form')
    .addEventListener('click', addStudentToArray);
  document
    .querySelector('#first-years-card-display')
    .addEventListener('click', expelStudent);
};

export default domEvents;
