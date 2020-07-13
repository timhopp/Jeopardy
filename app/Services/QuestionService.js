import _store from "../store.js";
import Question from "../Models/Question.js";


const _api = axios.create({
  baseURL:"https://jservice.io/api/",
  timeout: 3000
})

export const bgColor = function(){
  let bg = (Math.floor(Math.random() * 5));
  let result = "";
  switch(bg){
    case 0 : result = "bg-purp";
    break;
    case 1 : result = "bg-blue";
    break;
    case 2 : result = "bg-green";
    break;;
    case 3 : result = "bg-pink";
    break;
    case 4 : result = "bg-lav";
    break;
  }
  return result;
}


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
