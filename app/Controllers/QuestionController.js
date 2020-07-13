import _questionService from "../Services/QuestionService.js";
import store from "../store.js";

//Private
function _draw() {
  let questions = store.State.questions;
  let template = ""
  questions.forEach(question => template += question.Template)
  document.getElementById('questions').innerHTML = template
  console.log('It DREW')
}

function _drawAnswer(){
  let questions = store.State.questions;
  let template = ""
  questions.forEach(question => template += question.answerTemplate)
  document.getElementById('answer').innerHTML = template
  console.log('It DREW Answer')
}



//Public
export default class QuestionController {
  constructor() {
    store.subscribe("questions", _draw);
    _questionService.getQuestion()
  }

  answer(){
    document.getElementById('questions').classList.add('d-none')
    document.getElementById('answer').classList.remove('d-none')
    _drawAnswer()
  }

  newQuestion(){
    store.State.questions = [];
    document.getElementById('answer').classList.add('d-none')
    document.getElementById('questions').classList.remove('d-none')
    _questionService.getQuestion()
    _draw()
  }
}
