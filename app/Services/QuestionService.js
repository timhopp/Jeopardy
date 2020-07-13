import _store from "../store.js";
import Question from "../Models/Question.js";


const _api = axios.create({
  baseURL:"https://jservice.io/api/",
  timeout: 3000
})

class QuestionService {
  
  
  constructor(){
  }

  getQuestion(){
    _api.get("random").then(res => {
      console.log(res.data[0].question);
      let question = res.data.map(rawQuestionData => new Question(rawQuestionData))
      _store.commit("questions", question)
    }).catch(err => console.error(err))
  
  }

  getAnswer(){
    console.log(_store.State.questions[0].answer)
  }

 
     

}

const service = new QuestionService();
export default service;
