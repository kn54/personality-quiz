let questions=0;

function makeQuestion(question, answers) {
  questions+=1;

  let qdiv = document.createElement("div");

  qdiv.questionNumber = questions;

  // add questions;
  let p = document.createElement("p");
  p.innerHTML = question;
  qdiv.appendChild(p);

  qdiv.getClassName = function() {
    return "question" + this.questionNumber;
  }

  // add answers
  answers.forEach(function(answer) {
    let i = document.createElement("input");
    i.type = "radio";
    i.name = qdiv.getClassName();
    i.className = qdiv.getClassName();
    i.answer = answer;
    qdiv.appendChild(i);

    let label = document.createElement("label");
    label.className = qdiv.getClassName();
    label.innerHTML = answer;
    qdiv.appendChild(label);

    qdiv.appendChild(document.createElement("br"));
  })


  // add other info
  qdiv.length = answers.length;

  qdiv.getAnswer = function() {
    let chosen = document.querySelector("input[name=" + this.getClassName() + "]:checked");

    if (chosen) {
      return chosen.answer;
    } 
    
  }

  return qdiv;
}

// make a variable to store the "question" object
let fruit = makeQuestion("what is your favorite fruit", 
[
  "apple",
  "orange",
  "banana",
  "grapes",
  "pineapple",
  "cantelope"

])
// add the question object to the body element
document.body.appendChild(fruit);


// make a variable to store the "question" object
let q = makeQuestion("what is your favorite color", 
[
  "red",
  "aquamarine",
  "pink",
  "orange",
  "yellow",
  "purple", 
  "black"
])
// add the question object to the body element
document.body.appendChild(q);


// make them colorful
document.querySelectorAll("label.question2").forEach(function(label) {
  label.style.color = label.innerText;
})




// make a variable to store the "question" object
let a = makeQuestion("choose what you favroite type of horse is", 
[
  "appaloosa",
  " arabian",
  "morgan",
  "quarter horse",
  "palamino",
  "paint horse", 
  "dapeld",
  "lipazaner",
  " strawberry roan",
])
// add the question object to the body element
document.body.appendChild(a);












































































































































































