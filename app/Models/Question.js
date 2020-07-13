import {bgColor} from "../Services/QuestionService.js"

export default class Question {
    constructor(data) {
        this.answer = data.answer
        this.question = data.question 
        this.value = data.value  
        this.category = data.category || {category:data.title}
        this.bg = data.bg || bgColor()
        this.difficulty = data.value
    }

    get Template() {
        return `
        <div class="col-12 card bg-purp p-2 ${this.bg}">
              <h4 class="text-center">${this.category.title}-${this.difficulty}</h4>
              <h1 class="text-center">${this.question}</h1>
              <button class="button btn btn-success" onclick="app.questionController.answer()">Answer</button>
          </div>
        `
    }


    get answerTemplate() {
        return `
        <div class="col-12 card bg-purp pl-5 pr-5 p-2 ${this.bg}">
              <h1 class="text-center">${this.answer}</h1>
              <button class="button btn btn-success" onclick="app.questionController.newQuestion()">New Question</button>
          </div>
        `
    }

}